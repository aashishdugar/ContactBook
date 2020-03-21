import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  Injectable,  OnInit, NgZone } from '@angular/core';
import { ApiService } from "./service/api.service";
import { HttpClientModule, HttpHeaders, HttpResponse} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute, Router, Route } from "@angular/router";
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from "@angular/forms";
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
