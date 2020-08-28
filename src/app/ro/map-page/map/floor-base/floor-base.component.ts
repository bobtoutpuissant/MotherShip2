import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';

declare let $;

@Component({
  template: ''
})

export class FloorBaseComponent implements OnInit {

  constructor(
    public searchService: SearchService
    ) { }

  ngOnInit(): void {
    if (this.searchService.mainSearchBar){
      const idAttr = this.searchService.mainSearchBar;
      this.roomActivator(idAttr);
    }
  }

  clickMap(event: any): void {
    const idAttr = event.target.id;
    this.roomActivator(idAttr);
    console.log('floor-base.component');
  }

  roomActivator(idAttr: any): void{
    if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
      this.searchService.mainSearchBar = idAttr;
      $('input[name=\'room\']').trigger('click');
      document.getElementById('mainSearchBar').focus();
      this.highlightManager(idAttr);
    } else {}
  }

  highlightManager(idAttr: any): void {
    const mapItems = document.querySelectorAll('mapItem');
    [].forEach.call(mapItems, (e: any): void => {
      e.ClassName = e.ClassName.remove('highlightMap');
    });
    const roomIwantToBeFkngLightedUp = document.getElementById(idAttr);
    roomIwantToBeFkngLightedUp.classList.add('highlightMap');
  }
}
