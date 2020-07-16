import { Pipe, PipeTransform } from '@angular/core';
import SearchService from 'src/services/search.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(
    public searchService: SearchService
  ) {}

  transform(items: any[]): any[] {
    console.log('searchfilter working');

    if (!items) {
      return [];
    }

    const mainSearchBar = this.searchService.mainSearchBar.toLowerCase();

    if (mainSearchBar.length < 2) {
      return [];
    }

    if (!this.searchService.mainSearchBar) {
      return items;
    }

    return items.filter(it => {
      return JSON.stringify(it).toLowerCase().match(mainSearchBar);
    });
  }

}
