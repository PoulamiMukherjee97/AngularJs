import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Projects=[];
  public mem_val="hahaha";
  constructor() { 
    this.Projects=[
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":4,
      "progress":20,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":2,
      "progress":40,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":3,
      "progress":50,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":4,
      "progress":67,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":3,
      "progress":38,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":4,
      "progress":90,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":2,
      "progress":27,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":3,
      "progress":79,
      "status":"Success"},
      {"name":"Pendamini Backend UI",
      "date":"1.1.2015",
      "members":4,
      "progress":55,
      "status":"Success"}
      ];
   
  }
  deleteContent(index:number){
    document.querySelector("#row"+index).remove();
  }
  editContent(index:number){
    document.getElementById("edit"+index).style.display="none";
    document.getElementById("save"+index).style.display="block";
    document.getElementById("mem"+index).contentEditable="true";
  }
  saveContent(index:number){
    document.getElementById("mem"+index).contentEditable="false";
    document.getElementById("edit"+index).style.display="block";
    document.getElementById("save"+index).style.display="none";
  }
  ngOnInit(){
    
  }
  

}
