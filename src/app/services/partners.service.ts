import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getPartners() {
    return this.http.get(`${ this.url }/users?per_page=6&delay=3`).pipe(map( resp => resp['data']));
  }
}
