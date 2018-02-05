import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people;
  public _next: string;
  public _back: string;

  constructor(
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(url?: string) {
    this.swapiService.getPeople(url).subscribe(res => {
      this.people = res['results'].map(person => {
        person.url = person.url.split('/')[5];
        return person;
      });
      this._next = res['next'];
      this._back = res['previous'];
    })
  }

  next() {
    this.getPeople(this._next);
  }

  back() {
    this.getPeople(this._back);
  }

}
