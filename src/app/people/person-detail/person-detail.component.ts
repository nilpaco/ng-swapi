import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.sass']
})
export class PersonDetailComponent implements OnInit {

  public person;

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
    this.swapiService.getPerson(id).take(1).subscribe(res => {
      this.person = res;
    });
  }

}
