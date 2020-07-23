import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { GetCardInfoService } from '../get-card-info.service';
import SearchService from 'src/services/search.service';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.scss']
})
export class MapCompComponent implements OnInit {

  constructor(
    public searchService: SearchService,
    private card: GetCardInfoService,
    private searchPipe: SearchPipe,
  ) { }

  ngOnInit(): void {
  }

  clickMap(event: any): void {
    const idAttr = event.target.id;
    console.log(idAttr);
    if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
      this.searchService.mainSearchBar = event.target.id;
      $('input[name=\'room\']').click();
      console.log('que ça marche!');
      document.getElementById('mainSearchBar').focus();
      document.getElementById(idAttr);
    } else {
      console.log('il ny as rien');
    }
  }
}
