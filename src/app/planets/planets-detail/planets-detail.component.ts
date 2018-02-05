import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/take'
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss']
})
export class PlanetsDetailComponent implements OnInit {

  public planet;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.route.params.take(1).subscribe((params: Params) => {
      this.getPlanet(params.planet);
    });
  }

  getPlanet(id: number) {
    this.swapiService.getPlanet(id).take(1).subscribe(res => {
      this.planet = res;
    });
  }

}
