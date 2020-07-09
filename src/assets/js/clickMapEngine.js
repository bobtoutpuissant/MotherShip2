function setFocusToSearchBar() {
    document.getElementById(mainSearchBar).focus();
}

function clickMap(id) {
    if (id !== 'W0' && id !== 'W1' && id !== 'W2') {
        $("input[name='search']").val(id);
        $("input[name='room']").click();
        console.log('que ça marche!');
        document.getElementById('mainSearchBar').focus();
    } else { console.log('il ny as rien') }
};
