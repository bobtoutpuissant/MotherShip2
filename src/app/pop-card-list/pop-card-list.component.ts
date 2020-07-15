import { Component, OnInit, EventEmitter } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';
import { peopleList } from '../db-data';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-pop-card-list',
  templateUrl: './pop-card-list.component.html',
  styleUrls: ['./pop-card-list.component.scss']
})
export class PopCardListComponent implements OnInit {

  peopleList = peopleList;

  constructor() { }

  ngOnInit(): void {
  }

}
