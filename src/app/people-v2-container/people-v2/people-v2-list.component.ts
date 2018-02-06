import { Component, OnInit } from '@angular/core';
import { JsonserverService } from '../../services/jsonserver.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people-v2-list',
  templateUrl: './people-v2-list.component.html',
  styleUrls: ['./people-v2-list.component.scss']
})
export class PeopleV2ListComponent implements OnInit {

  public people: Person[];

  constructor(
    private jsonserverService: JsonserverService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.jsonserverService.getPeople().take(1).subscribe((res: Person[]) => {
      this.people = res;
    });
  }

  delete(personId: number) {
    this.jsonserverService.delete(personId).take(1).subscribe(res => {
      console.log('deleted!');
      this.getPeople();
    });
  }

}
