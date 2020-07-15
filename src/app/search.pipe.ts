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

    if (!this.searchService.mainSearchBar) {
      return items;
    }

    const mainSearchBar = this.searchService.mainSearchBar.toLowerCase();

    return items.filter(it => {
      return JSON.stringify(it).toLowerCase().match(mainSearchBar);
    });
  }

}
