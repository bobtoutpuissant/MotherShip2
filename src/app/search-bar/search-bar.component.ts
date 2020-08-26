import { Component, OnInit } from '@angular/core';
import { GetCardInfoService } from 'src/services/get-card-info.service';
import {SearchService} from 'src/services/search.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RoutingStateService, } from 'src/services/routing-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  previousRoute: string;
  route: string;
  peopleData: any[] = [];

  constructor(
    private card: GetCardInfoService,
    public searchService: SearchService,
    public router: Router,
    public location: Location,
    public routingStateService: RoutingStateService,
    ) {
      router.events.subscribe(val => {
        if (location.path() !== '') {
          this.route = location.path();
        } else {
          this.route = 'home';
        }
      });
      this.routingStateService.loadRouting();
      this.routingStateService.getPreviousUrl();
    }

  ngOnInit(): void {
    this.previousRoute = this.routingStateService.getPreviousUrl();
  }
}
