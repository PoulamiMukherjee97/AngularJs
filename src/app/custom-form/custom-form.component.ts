import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';
import {locationValidation, skillsValidation} from './customValidators';

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent  {
  skillsList=["Html,CSS3,JS","Angular 8","Express JS","SASS","React JS","Node JS","ES5,ES6,ES7","Veu Js","Mongo DB","Bootstrap 4","Typescript"];
  form=new FormGroup({
    'associateName':new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("^[a-zA-Z]+(\s[a-zA-Z]+)?$")
    ]),
    'associateId':new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern("^[0-9]*$")
    ]),
    'projectId':new FormControl('',[
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern("^[a-zA-Z0-9]*$")
    ]),
    'location':new FormGroup({
      'shore':new FormControl(),
      'select':new FormControl()
    },{validators:locationValidation}),
    
    'Skills':new FormArray([],{validators:skillsValidation}),
    'file':new FormControl('',Validators.required),
    'textarea':new FormControl('',Validators.required),



  });
 
  get associateName(){
    return this.form.get('associateName');
  }
  get associateId(){
    return this.form.get('associateId');
  }
  get projectId(){
    return this.form.get('projectId');
  }
  get select(){
    return this.form.get('location.select');
  }
  get location(){
    return this.form.get('location');
  }
  get Skills(){
    return this.form.get('Skills') as FormArray;
  }
  get file(){
    return this.form.get('file');
  }
  get textarea(){
    return this.form.get('textarea');
  }
  addSkill($event)
  {
    
    if($event.target.checked)
      this.Skills.push(new FormControl($event.target.value));
    else
    {
      let index=this.Skills.controls.indexOf($event.target.value);
      this.Skills.removeAt(index);
    }
    console.log(this.Skills)
  }
  onReset(){
    for(let skill of this.Skills.controls)
      (document.getElementById(skill.value) as HTMLInputElement).checked=false;
    this.form.reset();
    
    this.Skills.clear();
    
  }
}
