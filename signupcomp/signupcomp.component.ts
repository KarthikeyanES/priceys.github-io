import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signupcomp',
  templateUrl: './signupcomp.component.html',
  styleUrls: ['./signupcomp.component.css']
})
export class SignupcompComponent {
  constructor(private builder:FormBuilder,private toastr:ToastrService){

  }
  signupform = this.builder.group({
   Userid:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)]))
   ,
   email:this.builder.control('',Validators.compose([Validators.required,Validators.email]))
  ,
  phone:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)]))
,
 password:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(10)]))
 ,
 code:this.builder.control('',Validators.required)
 ,
 cpassword:this.builder.control('',Validators.compose([Validators.required,]))

})

proceedsignup(){
  if(this.signupform.valid){

  }
  else{
    console.warn('Enter Valid Data');
    this.toastr.warning('Enter Valid Data');

  }
}

}
