import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public signupForm !: FormGroup;
  submitted =false;
  constructor (private formBuider : FormBuilder, private http : HttpClient, private router:Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuider.group({

      fullname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      lastname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      age:['',[Validators.required,Validators.max(100)]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
    })
  }
  signUp(data:object){
    this.submitted = true
    if(this.signupForm.invalid){
          return
    }
     this.http.post<any>("http://localhost:3000/usersign",this.signupForm.value)
.subscribe(res=>{
  alert("Signup Successfull");
   this.signupForm.reset();
   this.router.navigate(['user/login']);

},err=>{
alert("Something went wrong")
})
}
}
