import { Component, OnInit, EventEmitter } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';

@Component({
  selector: 'app-pop-card-list',
  templateUrl: './pop-card-list.component.html',
  styleUrls: ['./pop-card-list.component.scss']
})
export class PopCardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listenTo(any: EventEmitter) {

  }

}
