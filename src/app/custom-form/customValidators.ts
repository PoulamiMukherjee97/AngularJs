import {ValidationErrors,ValidatorFn,FormGroup, FormArray} from "@angular/forms"
export const locationValidation: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const shore = control.get('shore');
    const select = control.get('select');
  
    return ((shore.value==2 && (select.value>=1 && select.value<=5))|| (shore.value==1 && (select.value>=6 && select.value<=7))) ? { locationValidation: true } : null;
  };
  export const skillsValidation: ValidatorFn = (skills: FormArray | null): ValidationErrors | null => {
   
    
    let c=skills.controls.length;
    console.log("Length"+c);
    return c<5?{ skillsValidation:true}:null;
  }
