import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  public person: Person;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.route.params.take(1).subscribe((params: Params) => {
      this.getPerson(params.person);
    });
  }

  getPerson(id: number) {
    this.swapiService.getPerson(id).take(1).subscribe((res: Person) => {
      this.person = res;
    });
  }

}
