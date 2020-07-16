import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';
import { HttpClientModule } from '@angular/common/http';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-src-bar',
  templateUrl: './src-bar.component.html',
  styleUrls: ['./src-bar.component.scss']
})
export class SrcBarComponent implements OnInit {


  peopleData: any[] = [];

  constructor(
    private card: GetCardInfoService,
    public searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

}
