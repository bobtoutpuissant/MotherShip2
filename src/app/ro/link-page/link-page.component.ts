import { Component, OnInit } from '@angular/core';
import { LINKLIST } from 'src/assets/data/linkList';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {

  linkList = LINKLIST;

  constructor() { }

  ngOnInit(): void {
  }

}
