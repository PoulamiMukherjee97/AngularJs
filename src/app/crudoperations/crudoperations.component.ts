import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css']
})
export class CrudoperationsComponent implements OnInit {
  @Input() studentData=[];
  @Output() sendData=new EventEmitter();
  

  constructor( ) {}
  ngOnInit(): void {
    
    
    }    

  
  add(newStudent:HTMLInputElement){
    console.log(this.studentData)
    this.studentData.push({name:newStudent.value,isChecked:false});
    this.sendData.emit(this.studentData);
  }
  del(){
    console.log(this.studentData)
    this.studentData=this.studentData.filter(student=>student.isChecked!=true);
    this.sendData.emit(this.studentData);
  }

}