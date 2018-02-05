import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people/people-list.component';
import { PlanetsListComponent } from './planets/planets-list.component';
import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PeopleV2ContainerComponent } from './people-v2-container/people-v2-container.component';
import { PeopleV2ListComponent } from './people-v2-container/people-v2/people-v2-list.component';
import { PeopleV2FormComponent } from './people-v2-container/people-v2-form/people-v2-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:person', component: PersonDetailComponent },
  { path: 'planets', component: PlanetsListComponent},
  { path: 'planets/:planet', component: PlanetsDetailComponent },
  { path: 'people-v2', component: PeopleV2ContainerComponent, 
    children: [
      { path: '', component: PeopleV2ListComponent },
      { path: ':person', component: PeopleV2FormComponent },
      { path: 'new', component: PeopleV2FormComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
