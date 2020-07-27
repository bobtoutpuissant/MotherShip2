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
      if (idAttr.includes('W0')){
        const switchMe = document.getElementById('floor0-tab');
        const unswitch1 = document.getElementById('floor1-tab');
        const unswitch2 = document.getElementById('floor2-tab');
        const switchMepanel = document.getElementById('floor0');
        const unswitch1panel = document.getElementById('floor1');
        const unswitch2panel = document.getElementById('floor2');
        switchMe.classList.add('active');
        switchMe.setAttribute('aria-selected', 'true');
        switchMepanel.classList.add('active');
        unswitch1.classList.remove('active');
        unswitch1.setAttribute('aria-selected', 'false');
        unswitch1panel.classList.remove('active');
        unswitch2.classList.remove('active');
        unswitch2.setAttribute('aria-selected', 'false');
        unswitch2panel.classList.remove('active');
        console.log('switchMe' + switchMe);
        console.log('unswitch1' + unswitch1);
        console.log('unswitch2' + unswitch2);
        console.log('switchMepanel' + switchMepanel);
        console.log('unswitch1panel' + unswitch1panel);
        console.log('unswitch2panel' + unswitch2panel);
} else {
  if (idAttr.includes('W1')){
    const switchMe = document.getElementById('floor1-tab');
    const unswitch1 = document.getElementById('floor0-tab');
    const unswitch2 = document.getElementById('floor2-tab');
    const switchMepanel = document.getElementById('floor1');
    const unswitch1panel = document.getElementById('floor0');
    const unswitch2panel = document.getElementById('floor2');
    switchMe.classList.add('active');
    switchMe.setAttribute('aria-selected', 'true');
    switchMepanel.classList.add('active');
    unswitch1.classList.remove('active');
    unswitch1.setAttribute('aria-selected', 'false');
    unswitch1panel.classList.remove('active');
    unswitch2.classList.remove('active');
    unswitch2.setAttribute('aria-selected', 'false');
    unswitch2panel.classList.remove('active');
    console.log('switchMe' + switchMe);
    console.log('unswitch1' + unswitch1);
    console.log('unswitch2' + unswitch2);
    console.log('switchMepanel' + switchMepanel);
    console.log('unswitch1panel' + unswitch1panel);
    console.log('unswitch2panel' + unswitch2panel);
  } else {
    const switchMe = document.getElementById('floor2-tab');
    const unswitch1 = document.getElementById('floor0-tab');
    const unswitch2 = document.getElementById('floor1-tab');
    const switchMepanel = document.getElementById('floor2');
    const unswitch1panel = document.getElementById('floor0');
    const unswitch2panel = document.getElementById('floor1');
    switchMe.classList.add('active');
    switchMe.setAttribute('aria-selected', 'true');
    switchMepanel.classList.add('active');
    unswitch1.classList.remove('active');
    unswitch1.setAttribute('aria-selected', 'false');
    unswitch1panel.classList.remove('active');
    unswitch2.classList.remove('active');
    unswitch2.setAttribute('aria-selected', 'false');
    unswitch2panel.classList.remove('active');
    console.log('switchMe' + switchMe);
    console.log('unswitch1' + unswitch1);
    console.log('unswitch2' + unswitch2);
    console.log('switchMepanel' + switchMepanel);
    console.log('unswitch1panel' + unswitch1panel);
    console.log('unswitch2panel' + unswitch2panel);
  }
}
    } else {
      console.log('il ny as rien');
    }
  }

}
