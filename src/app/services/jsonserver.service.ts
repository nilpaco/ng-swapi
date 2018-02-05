import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable()
export class JsonserverService {

  private url: string = 'http://178.62.25.113/people';
  private httpOptions;

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }
  
  getPeople(personId?: number): Observable<any> {
    const url = personId ? `${this.url}/${personId}` : this.url;
    return this.http.get<Person[] | Person>(url);
  }

  save(person: Person): Observable<any> {
    return this.http.post<any>(this.url, person, this.httpOptions);
  }

  update(person: Person): Observable<any> {
    const url = `${this.url}/${person.id}`;
    return this.http.put<any>(url, person, this.httpOptions);
  }

}
