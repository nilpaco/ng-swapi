import { Component, OnInit } from '@angular/core';
import { JsonserverService } from '../../services/jsonserver.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person';
import { HairColor, EyeColor } from '../../models/enums';

@Component({
  selector: 'app-people-v2-form',
  templateUrl: './people-v2-form.component.html',
  styleUrls: ['./people-v2-form.component.scss']
})
export class PeopleV2FormComponent implements OnInit {

  public person: Person = new Person();
  public hairEnum = HairColor;
  public eyeEnum = EyeColor;

  constructor(
    private jsonserverService: JsonserverService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      this.getPerson(params.person);
    });
  }

  getPerson(id: number) {
    this.jsonserverService.getPeople(id).take(1).subscribe(res => {
      this.person = res;
    });
  }

  save() {
    if (this.person.id) {
      this.jsonserverService.update(this.person).take(1).subscribe(res => {
        console.log('saved!');
      });
    } else {
      this.jsonserverService.save(this.person).take(1).subscribe(res => {
        console.log('saved!');
      });
    }
  }

}
