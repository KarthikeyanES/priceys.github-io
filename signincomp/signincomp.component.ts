import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-signincomp',
  templateUrl: './signincomp.component.html',
  styleUrls: ['./signincomp.component.css']
})
export class SignincompComponent {
constructor(private builder:FormBuilder){

}

signinform = this.builder.group({
  
})
}
