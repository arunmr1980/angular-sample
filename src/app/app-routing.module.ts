import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerFilesComponent } from './customer-files/customer-files.component';


const routes: Routes = [
  { path: 'customer-files', component: CustomerFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
