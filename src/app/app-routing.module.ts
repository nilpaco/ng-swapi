import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people/people-list.component';
import { PlanetsListComponent } from './planets/planets-list.component';
import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:person', component: PersonDetailComponent },
  { path: 'planets', component: PlanetsListComponent},
  { path: 'planets/:planet', component: PlanetsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
