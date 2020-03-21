import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeCreateComponent} from "./components/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";


const routes: Routes = [
  {path:"create-employee", component:EmployeeCreateComponent},
  {path:"edit-employee/:id", component:EmployeeEditComponent},
  {path:"employees-list", component:EmployeeListComponent},
  {path:"",   pathMatch:"full", redirectTo:'create-employee'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
