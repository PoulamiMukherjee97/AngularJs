import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TheadComponent } from './thead/thead.component';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { CruddataComponent } from './cruddata/cruddata.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TheadComponent,
    CalculatorComponent,
    CustomFormComponent,
    CrudoperationsComponent,
    CruddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
