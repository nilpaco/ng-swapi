import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-absctract-list',
})
export abstract class AbstractListComponent implements OnInit {

  public _next: string;
  public _back: string;
  public loading: boolean;

  constructor(
    protected swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.getList();
  }

  protected abstract getList(url?: string): void;

  protected abstract next(): void;

  protected abstract back(): void;

}
