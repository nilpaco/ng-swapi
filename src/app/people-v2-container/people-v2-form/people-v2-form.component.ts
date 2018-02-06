import { Component, OnInit } from '@angular/core';
import { JsonserverService } from '../../services/jsonserver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../models/person';
import { HairColor, EyeColor } from '../../models/enums';
import { SwapiService } from '../../services/swapi.service';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-people-v2-form',
  templateUrl: './people-v2-form.component.html',
  styleUrls: ['./people-v2-form.component.scss']
})
export class PeopleV2FormComponent implements OnInit {

  public person: Person = new Person();
  public hairEnum = HairColor;
  public eyeEnum = EyeColor;
  public planetEnum = [];

  constructor(
    private jsonserverService: JsonserverService,
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPlanets();
    this.route.params.subscribe(params => {
      if (params.person !== 'new') {
        this.getPerson(params.person);
      }
    });
  }

  getPerson(id: number) {
    this.jsonserverService.getPeople(id).take(1).subscribe((res: Person) => {
      this.person = res;
    });
  }

  getPlanets(url?: string) {
    this.swapiService.getPlanets(url).take(1).subscribe((res: Planet[]) => {
      this.planetEnum.push(...res['results']);
      res['next'] ? this.getPlanets(res['next']) : '';
    });
  }

  save() {
    if (this.person.id) {
      this.jsonserverService.update(this.person).take(1).subscribe((res: Person) => {
        console.log('updated!');
      });
    } else {
      this.jsonserverService.save(this.person).take(1).subscribe((res: Person) => {
        this.router.navigate(['..', res.id], { relativeTo: this.route });
        console.log('saved!');
      });
    }
  }

}
