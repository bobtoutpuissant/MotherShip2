import { Component, OnInit } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';
import SearchService from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-src-bar',
  templateUrl: './src-bar.component.html',
  styleUrls: ['./src-bar.component.scss']
})
export class SrcBarComponent implements OnInit {
  peopleData: any[] = [];

  constructor(
    private card: GetCardInfoService,
    public searchService: SearchService,
    public router: Router
  ) {}

  ngOnInit(): void {
  }

}
