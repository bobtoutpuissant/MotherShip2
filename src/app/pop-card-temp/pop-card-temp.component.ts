import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-card-temp',
  templateUrl: './pop-card-temp.component.html',
  styleUrls: ['./pop-card-temp.component.scss']
})
export class PopCardTempComponent implements OnInit {

  thisDudeInfo = {
    sn : 'test',
    givenName : 'dude',
    mail : 'bgDu31@wanadoo.fr',
    room : 'W999',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
