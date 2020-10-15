import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},{
  path:'restaurants',
  component:HomeComponent
},{
path:'restaurants/:id',
component:RestaurantComponent
},
{
path:'placestovisit',
component:CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
