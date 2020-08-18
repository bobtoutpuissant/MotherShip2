export function HighlightManager(idAttr: any): void {
  console.log('6 - On recupère les cases des maps');
  const mapItems: any = document.querySelectorAll('mapItem');
  console.log('    - mapItems : ' + mapItems);
  [].forEach.call(mapItems, function(e: any): void {
    e.ClassName = e.ClassName.remove('highlightMap');
    console.log('a');
  });
  const roomIwantToBeFkngLightedUp = document.getElementById(idAttr);
  console.log('7 - on met en HighLight : ' + roomIwantToBeFkngLightedUp);
  roomIwantToBeFkngLightedUp.classList.add('highlightMap');

}
