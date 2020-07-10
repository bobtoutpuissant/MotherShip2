import { Component, OnInit, Input } from '@angular/core';
import { peopleList } from '../db-data';
import {People} from '../people';

@Component({
  selector: 'app-pop-card-temp',
  templateUrl: './pop-card-temp.component.html',
  styleUrls: ['./pop-card-temp.component.scss']
})
export class PopCardTempComponent implements OnInit {

  @Input()
  people: People;

  constructor() { }

  ngOnInit(): void {
  }

}
