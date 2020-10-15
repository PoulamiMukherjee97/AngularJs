import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  length;
  constructor(private data:DataService) {
    this.cartItems=this.data.getCartData();
    this.length=this.cartItems.length;
    console.log(this.length)
   }

  ngOnInit(): void {
  }
  delete(restaurant){
    this.cartItems=this.cartItems.filter(item=>item!=restaurant);
    this.length=this.cartItems.length;
  }
  
}
