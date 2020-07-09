import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCardInfoService {

  peopleData ='';

  constructor(private http: HttpClient) {}

  getPeopleData(): object {
    return this.http.get(this.peopleData, {responseType: 'json'});
  }

}
