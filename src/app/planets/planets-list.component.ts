import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Planet } from '../models/planet';
import { AbstractListComponent } from '../models/abstract-list.component';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent extends AbstractListComponent {

  public planets: Planet[];
  
  constructor(
    public swapiService: SwapiService
  ) { 
    super(swapiService)
  }

  getList(url?: string) {
    this.loading = true;
    this.planets = undefined;
    this.swapiService.getPlanets(url).subscribe((res: Planet[]) => {
      this.loading = false;
      this.planets = res['results'].map(planet => {
        planet.url = planet.url.split('/')[5];
        return planet;
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
