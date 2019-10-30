import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {LoginUser} from '../loginuser';
import {AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  
  
  

  constructor(private authservice:AuthService,private router:Router,private formbuilder:FormBuilder) { }

    loginForm:FormGroup;
    isSubmitted=false;
    

  ngOnInit()
   {
    this.loginForm=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }

  login()
  {
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    
    // this.authservice.login(this.loginForm.value)
    // this.router.navigateByUrl('/admin')
    }
  else  if(this.loginForm.valid){
    this.authservice.login(this.loginForm.value).subscribe(
      data => {
        this.loginUser = data;
        console.log(data);
        console.log(data.email);
        if(data.email!=null){
          this.isSubmitted=true;
          this.router.navigateByUrl('/admin');

        }
        else{
            window.alert("Invalid username or password ");
        }
      }
    )
    }
  }
  
}