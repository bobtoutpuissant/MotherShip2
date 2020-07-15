import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} mainSearchBar
   * @returns {any[]}
   */
  transform(items: any[], mainSearchBar: string): any[] {
    console.log('searchfilter working');

    if (!items) {
      return [];
    }
    if (!mainSearchBar) {
      return items;
    }
    mainSearchBar = mainSearchBar.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(mainSearchBar);
    });
  }

}
