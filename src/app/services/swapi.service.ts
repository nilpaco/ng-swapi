import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SwapiService {

  private url: string = 'https://swapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  getPlanets(url?: string): Observable<any[]> {
    return this.http.get<any[]>(url ? url : `${this.url}/planets/?page=1`);
  }

  getPlanet(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/planets/${id}/`);
  }

  getPeople(url?: string): Observable<any[]> {
    return this.http.get<any[]>(url ? url : `${this.url}/people/?page=1`);
  }

  getPerson(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/people/${id}/`);
  }

}
