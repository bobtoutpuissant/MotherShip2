import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { HighlightManager } from 'src/assets/ts/FunctHighlightManager';

declare let $;

@Component({
  selector: 'app-floor-base',
  templateUrl: './floor-base.component.html',
  styleUrls: ['./floor-base.component.scss']
})
export class FloorBaseComponent implements OnInit {

  constructor(
    public searchService: SearchService
    ) { }

  ngOnInit(): void {

  }

  RoomActivator(idAttr: any): void{
    console.log('3 - roomActivator est appelé, on lui envoie idAttr');

    if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
      console.log('4 - On envoie idAttr dans la searchBar pour lancer la recherche');
      console.log('    - SearchService : ' + SearchService);
      console.log('    - mainSearchBar : ' + this.searchService.mainSearchBar);
      $('input[name=\'room\']').trigger('click');
      console.log('5 - On focus la searchbar, idAttr correspond à quelque chose');
      document.getElementById('mainSearchBar').focus();
      HighlightManager(idAttr);
    } else {
      console.log('END 2 - idAttr ne renvoie vers rien');
    }
  }
}
