import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted  : boolean = true;
  loginpage : boolean = true;
  forgot: boolean =false;
  newpasswordpage:boolean=false;
  updatesuccesfully:boolean=false;
  login: FormGroup;
  forgotpassword : FormGroup;
  createpassword: FormGroup;
  showPassword: boolean = false;
  showPassword1: boolean = false;
  constructor(private router: Router,private snackBar: MatSnackBar,) {
    this.login = new FormGroup({
      email: new FormControl({value:'',disabled:false}, [Validators.required]),
      password: new FormControl({value:'',disabled:false}, [Validators.required])
    });
     this.forgotpassword = new FormGroup({
      reqemail: new FormControl({value:'',disabled:false}, [Validators.required]),
     });
    
     this.createpassword=new FormGroup ({
      newpassword : new FormControl({value:'',disabled:false}, [Validators.required]),
      confirmpassword:new FormControl({value:'',disabled:false}, [Validators.required]),
     })
  }

  ngOnInit(): void {
  }
  viewpass() {
    this.showPassword = !this.showPassword
  }
  viewpass1() {
    this.showPassword1 = !this.showPassword1
  }
  submit(){
    if(this.login.valid){
      this.router.navigate(['/dashboard'])
    }  
    else
    this.login.markAllAsTouched();
  }
  forgotpasswordpage(){
      this.loginpage = false;
      this.forgot=true;
   
  }
  emailrequest(){
    if(this.forgotpassword.valid){
      this.newpasswordpage=true;
      this.forgot= false;
    }
    else
    this.forgotpassword.markAllAsTouched();
  }
 
  passwordupdate(){
    if(this.createpassword.valid){
      if(this.createpassword.value.newpassword==this.createpassword.value.confirmpassword){
        this.updatesuccesfully=true;
        this.newpasswordpage=false;
       }
       else {
        this.openSnackBar("your password is Mismatch")
      }
    }
    else
    this.createpassword.markAllAsTouched();
  
  }
  backtologin(){
    this.loginpage=true
    this.updatesuccesfully=false;
  }
  openSnackBar(mes: any) {
    this.snackBar.open(mes, 'Ok',
      {
        duration: 2000
      });

  }
}
