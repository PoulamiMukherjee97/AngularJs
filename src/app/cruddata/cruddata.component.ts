import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'cruddata',
  templateUrl: './cruddata.component.html',
  styleUrls: ['./cruddata.component.css']
})
export class CruddataComponent implements OnInit {
  students:any[];
  constructor(private http:HttpClient) {}
  ModifiedList(data)
  {
    console.log(data);
    this.students=data;
  }
  ngOnInit(): void {
    this.http.get('https://jsonblob.com/api/7bcfe79f-0613-11eb-939b-d101261d5571') 
    .subscribe((response:any) => { 
      this.students=response;
      console.log(this.students)
    }); 
  }
  
}
