import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { Planet } from '../models/planet';

@Injectable()
export class SwapiService {

  private url: string = 'https://swapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  getPlanets(url?: string): Observable<Planet[]> {
    return this.http.get<Planet[]>(url ? url : `${this.url}/planets/?page=1`);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.url}/planets/${id}/`);
  }

  getPeople(url?: string): Observable<Person[]> {
    return this.http.get<Person[]>(url ? url : `${this.url}/people/?page=1`);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}/people/${id}/`);
  }

}
