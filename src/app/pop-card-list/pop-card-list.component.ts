import { Component, OnInit } from '@angular/core';
import { peopleList } from '../db-data';
import SearchService from 'src/services/search.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pop-card-list',
  templateUrl: './pop-card-list.component.html',
  styleUrls: ['./pop-card-list.component.scss']
})
export class PopCardListComponent implements OnInit {

  peopleList = peopleList;

  text: any ;
  JSONData: any;
  csvTextPeople: 'assets/data/people.csv';
  csvJSON(csvTextPeople: any): void {
   const lines = csvTextPeople.split('\n');

   const result = [];

   const headers = lines[0].split(',');
   console.log(headers);
   for (let i = 1; i < lines.length - 1; i++) {

       const obj = {};
       const currentline = lines[i].split(',');

       for (let j = 0; j < headers.length; j++) {
           obj[headers[j]] = currentline[j];
       }

       result.push(obj);

   }

   // return result; //JavaScript object
   console.log(JSON.stringify(result)); // JSON
   this.JSONData = JSON.stringify(result);
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
    public searchService: SearchService,
    public jsoner: HttpClient,
  ) { }

  ngOnInit(): void {this.jsoner.get('assets/data/people.csv', { responseType: 'text' as 'json'}).subscribe(data => {console.log(data); })

  }
}
