import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  restaurants=[];
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("https://jsonblob.com/api/fb31f0d6-0df3-11eb-a6df-adcb4e92ad68");
  }
  setCartData(restaurants:any[]){
    this.restaurants=restaurants;
  }
  getCartData(){
    return this.restaurants;
  }
  
}
