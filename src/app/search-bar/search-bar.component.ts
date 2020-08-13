import { Component, OnInit } from '@angular/core';
import { GetCardInfoService } from 'src/services/get-card-info.service';
import {SearchService} from 'src/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  peopleData: any[] = [];

  constructor(
    private card: GetCardInfoService,
    public searchService: SearchService,
    public router: Router) { }

  ngOnInit(): void {
  }

}
