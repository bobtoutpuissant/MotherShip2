import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  defaultImage = 'https://www.placecage.com/1000/1000';
  webmail = '../../assets/startpage/webmail.png';
  sharepoint = '../../assets/startpage/sharepoint.png';
  dropzone = '../../assets/startpage/dropzone.png';
  tpm = '../../assets/startpage/tpm.png';
  portal = '../../assets/startpage/portal.png';
  PEM = '../../assets/startpage/PEM.png';
  zadig = '../../assets/startpage/zadig.png';
  intranet = '../../assets/startpage/intranet.png';
  SiteQualite = '../../assets/startpage/SiteQualite.png';
  agresso = '../../assets/startpage/agresso.png';
  vignetteCOVID19ok = '../../assets/startpage/vignetteCOVID19ok.jpg';
  ICT = '../../assets/startpage/ICT.png';

  constructor() { }

  ngOnInit(): void {
  }

}
