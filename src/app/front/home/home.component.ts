import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeModel } from './home.model';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public formValue !: FormGroup;
  userModelObj : HomeModel = new HomeModel();
  userData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  submitted =false;

  constructor(private formbuilder: FormBuilder,private api : QuestionService) { }
  ngOnInit(): void {
     this.formValue = this.formbuilder.group({
      name :['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      category:['',[Validators.required]],
      price:['',[Validators.required]],
     }) 
     this.getUserDetails();
  }
  sign(){
    this.submitted = true
    if(this.formValue.invalid){
          return
    }
  }

  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.category = this.formValue.value.category;
    this.userModelObj.price = this.formValue.value.price;

    this.api.postUser(this.userModelObj).subscribe(res=>{
      alert('User Added Successfully')
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formValue.reset();
      this.getUserDetails();
    },err=>{
      alert('Something Went Wrong');
    })
  }
  getUserDetails(){
      this.api.getUser().subscribe(res=>{
        this.userData = res;
      })
  }
}
