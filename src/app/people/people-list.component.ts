import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Person } from '../models/person';
import { AbstractListComponent } from '../models/abstract-list.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent extends AbstractListComponent {

  public people: Person[];

  constructor(
    protected swapiService: SwapiService
  ) {
    super(swapiService);
  }

  getList(url?: string) {
    this.loading = true;
    this.people = undefined;
    this.swapiService.getPeople(url).subscribe((res: Person[]) => {
      this.loading = false;
      this.people = res['results'].map(person => {
        person.url = person.url.split('/')[5];
        return person;
      });
      this._next = res['next'];
      this._back = res['previous'];
    })
  }

  next() {
    this.getList(this._next);
  }

  back() {
    this.getList(this._back);
  }

}
