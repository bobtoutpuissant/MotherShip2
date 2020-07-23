import { Component, OnInit, Input } from '@angular/core';
import SearchService from 'src/services/search.service';
import {People} from '../people';

@Component({
  selector: 'app-pop-card-temp',
  templateUrl: './pop-card-temp.component.html',
  styleUrls: ['./pop-card-temp.component.scss']
})
export class PopCardTempComponent implements OnInit {

  @Input()
  people: People;

  constructor(
    public searchService: SearchService,
    ) { }

  ngOnInit(): void {
  }
  clickMap(event: any) {
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
    } else {
      console.log('il ny as rien');
    }
  }

}
