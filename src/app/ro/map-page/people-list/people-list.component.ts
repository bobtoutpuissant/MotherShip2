import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList = [];

  text: any ;
  JSONData: any;
  csvTextPeople: 'assets/data/people.csv';
  filename: 'people.sn people.givenName' ;

  csvJSON(csv): any {

    const lines = csv.split('\n');

    const result = [];

    const headers = lines[0].split(';');

    for (let i = 1; i < lines.length; i++){

        const obj = {};
        const currentline = lines[i].split(';');

        for (let j = 0; j < headers.length; j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    return result;
  }

  convertFile(input: any): void {

  const reader = new FileReader();
  reader.readAsText(input.files[0]);
  reader.onload = () => {
    const text = reader.result;
    this.text = text;
    console.log(text);
    this.csvJSON(text);
  };

}

  constructor(
    public jsoner: HttpClient,
    public searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.jsoner.get('assets/data/people.csv', { responseType: 'text' as 'json'}).subscribe(data => {
      this.peopleList = this.csvJSON(data);
      console.log(this.peopleList);
    });
  }
}
