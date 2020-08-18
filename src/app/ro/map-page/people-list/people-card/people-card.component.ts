import { Component, OnInit, Input } from '@angular/core';
import {SearchService} from 'src/services/search.service';
import {People} from 'src/assets/ts/people';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {

  @Input()
  people: People;

  constructor(
    public searchService: SearchService,
    public router: Router,
    ) { }

  ngOnInit(): void {
  }
  clickMap(event: any): void {
    const idAttr = this.people.room;
    console.log(idAttr);
    if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
      this.searchService.mainSearchBar = this.people.room;
      $('input[name=\'room\']').click();
      console.log('que ça marche!');
      document.getElementById('mainSearchBar').focus();
      const addclass = 'highlightMap';
      const $cols = $('.mapItem').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});
      if (idAttr.includes('W0')){
        this.router.navigate(['map/floor0']);
} else {
  if (idAttr.includes('W1')){
    this.router.navigate(['map/floor1']);
  } else {
    this.router.navigate(['map/floor2']);
  }
}
    } else {
      console.log('il ny as rien');
    }
  }

}
