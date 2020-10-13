import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { ReactfunctionsComponent } from './reactfunctions/reactfunctions.component';

const routes: Routes = [{
  path:'',
  component:CustomFormComponent
},{
path:'students',
component:ReactfunctionsComponent
},
{
path:'calculator',
component:CalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
