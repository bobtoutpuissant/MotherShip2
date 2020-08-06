#!/usr/bin/perl

use Net::LDAP;

$basedir = "/var/www/html/assets";
$outfile = $basedir."/data/people.csv";
open(OUT,">$outfile");

$ldap = Net::LDAP->new ( "172.30.4.10" ) or die "$@";

$mesg = $ldap->bind ( version => 3 );          # use for searches

$userToAuthenticate = 'TELESPAZIO\tpzfit';
$passwd = "Ramonville2012";

$mesg = $ldap->bind ( "$userToAuthenticate",
                      password => "$passwd",
                      version => 3 );          # use for changes/edits

sub LDAPsearch
{
  my ($ldap,$searchString,$attrs,$base) = @_;

  # if they don't pass a base... set it for them

  #if (!$base ) { $base = "OU=Users,OU=Toulouse,OU=Telespazio France,DC=telespazio,DC=corp"; }
  if (!$base ) { $base = "OU=Telespazio France,DC=telespazio,DC=corp"; }

  # if they don't pass an array of attributes...
  # set up something for them

  if (!$attrs ) { $attrs = [ 'cn','mail' ]; }

  my $result = $ldap->search ( base    => "$base",
                               scope   => "sub",
                               filter  => "$searchString",
                               attrs   =>  $attrs
                             );
		     }

my @Attrs = ("givenname","sn","title","telephonenumber","mobile","mail","physicaldeliveryofficename","thumbnailPhoto","sAMAccountName");
#my @Attrs = ();

#my $result = LDAPsearch ( $ldap, "(&(sAMAccountName=dpattenden)(objectclass=person)(objectclass=organizationalPerson)(objectclass=user))", \@Attrs );
my $result = LDAPsearch ( $ldap, "(&(objectclass=person)(objectclass=organizationalPerson)(objectclass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))", \@Attrs );

#
# handle each of the results independently
# ... i.e. using the walk through method
#
my @entries = $result->entries;

print OUT "name;role;tpzphone;phone;mail;room;image;\n";

my $entr;
foreach $entr ( @entries ) {
	#print "DN: ", $entr->dn, "\n";
  my $sn =  $entr->get_value ("sn");
  next unless $sn;
  my $givenname =  $entr->get_value ("givenname");
  next unless $givenname;
  my $title =  $entr->get_value ("title");
  unless ($title) { $title = " "; }
  my $telephonenumber =  $entr->get_value ("telephonenumber");
  unless ($telephonenumber) { $telephonenumber = " "; }
  my $mobile =  $entr->get_value ("mobile");
  unless ($mobile) { $mobile = " "; }
  my $mail =  $entr->get_value ("mail");
  next unless $mail;
  my $physicaldeliveryofficename =  $entr->get_value ("physicaldeliveryofficename");
  unless ($physicaldeliveryofficename =~ m/^W/) {
	  $physicaldeliveryofficename = "";
  }
  my $thumbnailPhoto =  $entr->get_value ("thumbnailPhoto");
  if ($thumbnailPhoto) {
	  #my $sAMAccountName =  $entr->get_value ("sAMAccountName");
	#$jpgfile = $sAMAccountName.".jpg";
	$sn = uc $sn;
	$jpgfile = "".$sn." ".$givenname.".jpg";
	open (TMP, ">$basedir/img/$jpgfile");
	binmode(TMP);
	$| = 1;
	print TMP $thumbnailPhoto;
	close(TMP);
  } else {
	  $jpgfile = "";
  }
  print OUT "$givenname $sn\;$title;$telephonenumber;$mobile;$mail;$physicaldeliveryofficename;$jpgfile;\n";
}

#
# end of walk through method
#------------
