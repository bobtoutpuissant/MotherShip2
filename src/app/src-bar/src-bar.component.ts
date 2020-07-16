import { Component, OnInit } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';
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
