import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeAddComponent} from "./components/employee-add/employee-add.component";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";


const routes: Routes = [
  {path:"create-employee", component:EmployeeAddComponent},
  {path:"edit-employee/:id", component:EmployeeEditComponent},
  {path:"employees", component:EmployeeListComponent},
  {path:"",   pathMatch:"full", redirectTo:'create-employee'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
