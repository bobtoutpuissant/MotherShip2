import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GetCardInfoService } from 'src/services/get-card-info.service';
import {SearchService} from 'src/services/search.service';
import {SearchPipe} from 'src/app/search.pipe';


@Component({
  selector: 'app-floor0',
  templateUrl: './floor0.component.html',
  styleUrls: ['../map.component.scss']
})
export class Floor0Component implements OnInit {

  constructor(
    private card: GetCardInfoService,
    public searchService: SearchService,
    private searchPipe: SearchPipe,
    ) { }

    ngOnInit(): void {
      if (this.searchService.mainSearchBar){
        const idAttr = this.searchService.mainSearchBar;
        this.roomActivator(idAttr);
      }
    }

    clickMap(event: any): void {
      console.log(event + 'ce que recois clickmap');
      const idAttr = event.target.id;
      this.roomActivator(idAttr);
    }

    roomActivator(idAttr: any): void{
      if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
        this.searchService.mainSearchBar = idAttr;
        $('input[name=\'room\']').trigger('click');
        console.log('que ça marche!');
        document.getElementById('mainSearchBar').focus();
        this.highlightManager(idAttr);
      } else {
        console.log('il ny as rien');
      }
    }

    highlightManager(idAttr: any): void {
      const mapItems = document.querySelectorAll('mapItem');
      [].forEach.call(mapItems, function(e: any): void {
        e.ClassName = e.ClassName.remove('highlightMap');
      });
      const roomIwantToBeFkngLightedUp = document.getElementById(idAttr);
      roomIwantToBeFkngLightedUp.classList.add('highlightMap');
    }

}
