import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants;
  restaurant;
  constructor(private route:ActivatedRoute,private data:DataService) {}

  ngOnInit(): void {
    const id=parseInt(this.route.snapshot.paramMap.get("id"));
    this.data.getData().subscribe(response=>{
      this.restaurants=response;
      this.restaurant=this.restaurants.filter(item=>item.id===id)
      console.log(this.restaurant)

    })
    
  }
  arrayOne(n){
    n=parseInt(n);
    return Array(n);
    

  }

}
