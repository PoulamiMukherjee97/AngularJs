import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input=[];
  i=0;
  disableNumbers=false;
  disableSymbols=true;
  constructor() { }
  onlyNumberShow(){
    this.disableSymbols=true;
    this.disableNumbers=false;
  }
  onlySymbolShow(){
    this.disableNumbers=true;
    this.disableSymbols=false;
  }
  add(){
    this.onlyNumberShow();
    this.input[this.i++]='+';
  }
  sub(){
    this.onlyNumberShow();
    this.input[this.i++]='-';
  }
  mul(){
    this.onlyNumberShow();
    this.input[this.i++]='*';
  }
  division(){
    this.onlyNumberShow();
    this.input[this.i++]='/';
  }
  equal(){  
    console.log(this.input);
    let flag="";
    let sum=Number(this.input[0]);
    for(let index=1;index<this.input.length-1;index++)
    {
      if(this.input[index]=='+'){
        sum+=Number(this.input[index+1]);
      }
      else if(this.input[index]=='-'){
          sum-=Number(this.input[index+1]);
        }
        else if(this.input[index]=='*'){
          sum*=Number(this.input[index+1]);
        }
        else if(this.input[index]=='/'){
          if(this.input[index+1]=='0'){
            flag="Division by Zero!!"; 
          }
          else
            sum/=Number(this.input[index+1]);
        }
    }
    let result=flag || sum.toString();
    document.querySelector("#input-text").innerHTML=result;
    this.input=[];
    this.i=0;
    this.input[this.i++]=sum.toString();
  }
  delete(){
    this.onlyNumberShow();
    console.log("Array: "+this.input+" Clear button pressed");
    --this.i;
    document.querySelector("#input-text").innerHTML="";
  }
  numberbtn($event){ 
    this.onlySymbolShow();
    this.input[this.i++]=$event.target.value;
    document.querySelector("#input-text").innerHTML=$event.target.value; 
  }
  ngOnInit(): void {
  }

}
