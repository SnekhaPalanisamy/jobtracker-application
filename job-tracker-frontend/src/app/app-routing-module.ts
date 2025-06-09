import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobList } from './components/job-list/job-list';
import { JobForm } from './components/job-form/job-form';
import { JobDetails } from './components/job-details/job-details';

const routes: Routes = [  
  { path: '', component: JobList },
  { path: 'add-job', component: JobForm },
  { path: 'edit-job/:id', component: JobForm },
  { path: 'job/:id', component: JobDetails },
  { path: '**', redirectTo: '' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
