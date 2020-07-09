import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCardInfoService } from '../get-card-info.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-src-bar',
  templateUrl: './src-bar.component.html',
  styleUrls: ['./src-bar.component.scss']
})
export class SrcBarComponent implements OnInit {


  peopleData: any[] = [];

  constructor(private card: GetCardInfoService) { }

  ngOnInit(): void {
  }

  onKey (thisRoomOrPeople: string) {
    console.log('onKey from searchBar working');
  }

  // (): object {
  //   return this.card.getPeopleData().subscribe(data => {
  //     const list = data.split(n);
  //     list.forEach(e => {
  //       this.peopleData.push(e);
  //     });
  //   });
  //   }

  //   public getData(): object {
  //     const file = ('HTMLInputElement'document.getElementById('roomList')).file[0];

  //     const jsonFile = this.csvJSON(file);


  //     // Set Http POST options
  //     const headers = new Headers({ 'Content-Type': 'application/json' });
  //     const options = new RequestOptions({ headers: headers });

  //     // Call Api with test connection data
  //     this.http
  //         .post('/api/TestConnection/TestConnection', jsonFile, options)
  //         .subscribe(data => {
  //             // alert request ok
  //             alert('ok');
  //         }, error => {
  //             // Log error
  //             console.log(error.json());
  //         });
  // }

  // public csvJSON(csv) {
  //     var lines = csv.split("\n");

  //     var result = [];

  //     var headers = lines[0].split(",");

  //     for (var i = 1; i < lines.length; i++) {

  //         var obj = {};
  //         var currentline = lines[i].split(",");

  //         for (var j = 0; j < headers.length; j++) {
  //             obj[headers[j]] = currentline[j];
  //         }

  //         result.push(obj);

  //     }

  //     //return result; //JavaScript object
  //     return JSON.stringify(result); //JSON
  // }

}
