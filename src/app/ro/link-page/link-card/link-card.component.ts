import { Component, OnInit, Input } from '@angular/core';
import { LinkSP } from 'src/assets/ts/linkSP';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input()
  linkCard: LinkSP;

  constructor() { }

  ngOnInit(): void {
  }

}
