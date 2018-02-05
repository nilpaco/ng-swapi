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
import { PeopleV2ContainerComponent } from './people-v2-container/people-v2-container.component';
import { PeopleV2ListComponent } from './people-v2-container/people-v2/people-v2-list.component';
import { PeopleV2FormComponent } from './people-v2-container/people-v2-form/people-v2-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,
    PersonDetailComponent,
    PeopleV2ContainerComponent,
    PeopleV2ListComponent,
    PeopleV2FormComponent
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
