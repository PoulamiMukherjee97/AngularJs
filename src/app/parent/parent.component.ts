import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  persons:any[];
  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
        
    this.http.get("https://jsonblob.com/api/e7f04bda-f69b-11ea-9625-3114e53aa684").subscribe((response:any)=>
    this.persons=response);

  }


}
