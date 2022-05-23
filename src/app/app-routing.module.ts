import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component Routes
import { JobListComponent } from './job-list/job-list.component'

const routes: Routes = [
  {path : '' , component: JobListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
