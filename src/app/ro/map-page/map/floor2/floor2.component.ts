import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-floor2',
  templateUrl: './floor2.component.html',
  styleUrls: ['./floor2.component.scss']
})
export class Floor2Component implements OnInit {

  @Output() click = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
    this.click.emit();
  }

}
