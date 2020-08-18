import { Component, OnInit } from '@angular/core';
import { ClickMap } from 'src/assets/ts/FunctClickMap';
import { RoomActivator } from 'src/assets/ts/FunctRoomActivator';
import { GetCardInfoService } from 'src/services/get-card-info.service';
import {SearchService} from 'src/services/search.service';
import {SearchPipe} from 'src/app/search.pipe';

@Component({
  selector: 'app-floor0',
  templateUrl: './floor0.component.html',
  styleUrls: ['../map.component.scss']
})
export class Floor0Component implements OnInit {

  roomActivator = RoomActivator;
  clickMap = ClickMap;

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

    clicked(event: any): void{
      this.clickMap(event);
    }


}
