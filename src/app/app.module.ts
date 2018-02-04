import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list.component';
import { PlanetsListComponent } from './planets/planets-list.component';
import { SwapiService } from './services/swapi.service';
import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
