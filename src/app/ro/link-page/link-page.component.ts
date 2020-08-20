import { Component, OnInit, Input } from '@angular/core';
import { LINKLIST } from 'src/assets/data/linkList';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {

  @Input()
  page;
  pageSize;
  collectionSize;

  linkList = LINKLIST;

  constructor() { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 12;
    }

}
