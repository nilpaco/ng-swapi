import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable()
export class JsonserverService {

  private url: string = 'http://178.62.25.113/people';
  private httpOptions;

  constructor(
    private http: HttpClient
  ) { }
  
  getPeople(personId?: number): Observable<any> {
    const url = personId ? `${this.url}/${personId}` : this.url;
    return this.http.get<Person[] | Person>(url);
  }

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }

  update(person: Person): Observable<Person> {
    const url = `${this.url}/${person.id}`;
    return this.http.put<Person>(url, person);
  }

}
