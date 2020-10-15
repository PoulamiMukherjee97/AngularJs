import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants;
  filteredrestaurants;
  notPresent=false;
  searchCalled=false;
  cartItems=[];
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(response=>{
      this.restaurants=response;
      this.restaurants=this.restaurants.map(res=>res={...res,"added":false})
      console.log(this.restaurants)
      });
    
  }
  search(item)
  {
    this.notPresent=false;
    this.searchCalled=true;
    if(this.restaurants.map(restaurant=>restaurant.cuisine_type).includes(item.value))
      this.filteredrestaurants=this.restaurants.filter(restaurant=>restaurant.cuisine_type===item.value);
    else
      this.notPresent=true;
  }
  add(restaurant){
    restaurant.added=true;
    this.cartItems.push(restaurant);
    this.data.setCartData(this.cartItems)
  }
  sort(event){
    console.log("sort");
    if(event.target.value==='2')
    {
      if(this.searchCalled)
        this.filteredrestaurants=this.filteredrestaurants.sort((a,b)=>{return a.price - b.price});
      else
        this.restaurants=this.restaurants.sort((a,b)=>{return a.price - b.price});
    }
    else{
      if(this.searchCalled)
        this.filteredrestaurants=this.filteredrestaurants.sort((a,b)=>{return b.price - a.price});
      else
        this.restaurants=this.restaurants.sort((a,b)=>{return b.price - a.price});
    }
    event.target.value='';
  }
}
