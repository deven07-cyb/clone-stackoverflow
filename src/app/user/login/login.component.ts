import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
    constructor(private formBuilder : FormBuilder,private router:Router,private http : HttpClient) {}
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
    }
    Userlogin(){
      let data = localStorage.getItem('localCart');
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      this.http.get<any>("http://localhost:3000/usersign").subscribe(res=>{
        const user = res.find((a:any)=>{
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });console.log(user)
        if(user){
          alert('login success !!');
          this.loginForm.reset();
          localStorage.setItem('user',JSON.stringify(user))
          this.router.navigate(['/home']);
  
  }
  else{
    alert('please enter valid information')
  }
      }) 
    }
}
