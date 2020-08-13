import { Pipe, PipeTransform } from '@angular/core';
import {SearchService} from 'src/services/search.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(
    public searchService: SearchService
  ) {}

  transform(items: any[]): any[] {

    if (!items) {
      return [];
    }

    const mainSearchBar = this.searchService.mainSearchBar.toLowerCase();
    const searchTUC = this.searchService.mainSearchBar.toUpperCase();

    if (mainSearchBar.length < 2) {
      return [];
    }

    if (!this.searchService.mainSearchBar) {
      return items;
    }

    if (searchTUC.startsWith('W') && mainSearchBar.length > 3) {
      const addclass = 'highlightMap';
      $('.mapItem').removeClass(addclass);
      const choosenOne = document.getElementById(searchTUC);
      choosenOne.classList.add(addclass);
      console.log(choosenOne);
}

    return items.filter(it => {
      return JSON.stringify(it).toLowerCase().match(mainSearchBar);
        }
    );
  }

}
