import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  invalidLogin;
  form=new FormGroup({
    'Name':new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("^[a-zA-Z]+(\s[a-zA-Z]+)?$")
    ]),
    'password':new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)])
    });
    constructor(private route:Router){}
  get Name(){
    return this.form.get('Name');
  }
  get password(){
    return this.form.get('password');
  }
  submit(credentials){
    this.invalidLogin=false;
    console.log(credentials);
    if(credentials.Name=='Poulami' && credentials.password=='123456')
        this.route.navigate(['/restaurants']);
    else
      this.invalidLogin=true;
  }

}
