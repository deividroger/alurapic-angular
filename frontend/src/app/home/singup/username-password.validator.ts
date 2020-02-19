import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePasswordValidator: ValidatorFn = (formGroup:FormGroup) =>{
   
    const username =  formGroup.get('userName').value;
    const  password = formGroup.get('password').value;

    if( username.trim() + password.trim()){
        return  username != password ? null : { userNamePassword: true  }
    }else{
        return null;
    } 
}