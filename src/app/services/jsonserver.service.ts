import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SwapiService {

  private url: string = 'http://178.62.25.113/people';

  constructor(
    private http: HttpClient
  ) { }

  // TODO: check get service
  get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }


  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getPerson(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/people/${id}/`);
  }

}
