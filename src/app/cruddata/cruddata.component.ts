import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'cruddata',
  templateUrl: './cruddata.component.html',
  styleUrls: ['./cruddata.component.css']
})
export class CruddataComponent implements OnInit {
  students=[{
    "name": "Poulami",
    "isChecked": false
  },
  {
    "name": "Shaban",
    "isChecked": false
  },
  {
    "name": "Sonia",
    "isChecked": false
  },
  {
    "name": "Dora",
    "isChecked": false
  },
  {
    "name": "Rohit",
    "isChecked": false
  },
  {
    "name": "Swarns",
    "isChecked": false
  },
  {
    "name": "Rupsa",
    "isChecked": false
  },
  {
    "name": "Priyanka",
    "isChecked": false
  },
  {
    "name": "Das",
    "isChecked": false
  },
  {
    "name": "Sambhu",
    "isChecked": false
  },
  {
    "name": "Soham",
    "isChecked": false
  },
  {
    "name": "Akash",
    "isChecked": false
  }
];
  
  // constructor(private http:HttpClient,private eventEmitterService: EventEmitterService) {
  //   // this.http.get('https://jsonblob.com/api/7bcfe79f-0613-11eb-939b-d101261d5571') 
  //   // .subscribe((response:any) => { 
  //   //   this.students=response;
  //   //   console.log(this.students)
  //   // }); 
  //  }
   
ModifiedList(data)
{
  console.log(data);
  this.students=data;
}


  ngOnInit(): void {}
  
}
