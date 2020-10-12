
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, filter, map, take, toArray } from 'rxjs/operators';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-reactfunctions',
  templateUrl: './reactfunctions.component.html',
  styleUrls: ['./reactfunctions.component.css']
})
export class ReactfunctionsComponent implements OnInit {
  students;
  comments;
  
  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
    this.students=this.service.getStudents().pipe(map(data=>{return data}));
    this.comments=this.service.getComments().pipe(concatMap(data=>from(data as any[])),take(10),toArray());

    console.log(this.students)
  }
  search(item:HTMLInputElement){
    console.log(item.value)
    this.students=this.students.pipe(map((content:any) => content.filter(student=>(student.dept===item.value || student.name==item.value))))
    
    console.log(this.students)
  }
  
  delete(){
    this.students=this.students.pipe(filter((item:any)=>item.isChecked!=true))
  }
 add(student)
 {
   this.students=this.students.create(student=>{student.next({"name":student.value,"age":23,"dept":"IT","isChecked":false})});
 }
}
