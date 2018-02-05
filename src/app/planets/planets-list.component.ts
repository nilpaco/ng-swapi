import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  public planets;
  public _next: string;
  public _back: string;

  constructor(
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(url?: string) {
    this.swapiService.getPlanets(url).subscribe(res => {
      this.planets = res['results'].map(planet => {
        planet.url = planet.url.split('/')[5];
        return planet;
      });
      this._next = res['next'];
      this._back = res['previous'];
    })
  }

  next() {
    this.getPlanets(this._next);
  }

  back() {
    this.getPlanets(this._back);
  }

}
