import { Component, OnInit } from '@angular/core';
import { ClickMap } from 'src/assets/ts/FunctClickMap';
import { RoomActivator } from 'src/assets/ts/FunctRoomActivator';
import { GetCardInfoService } from 'src/services/get-card-info.service';
import {SearchService} from 'src/services/search.service';
import {SearchPipe} from 'src/app/search.pipe';
import { FloorBaseComponent } from '../floor-base/floor-base.component';

@Component({
  selector: 'app-floor2',
  templateUrl: './floor2.component.html',
  styleUrls: ['../map.component.scss']
})
export class Floor2Component extends FloorBaseComponent implements OnInit {

  roomActivator = RoomActivator;
  clickMap = ClickMap;

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
