import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm:FormGroup;
  forbiddenName=['alok','sumit'];
  ngOnInit(){
    this.signUpForm=new FormGroup({
     userdata :new FormGroup({
       username:new FormControl(null,[Validators.required,this.onForbiddenName.bind(this)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
     }),
      gender:new FormControl('male',Validators.required),
      hobbies:new FormArray([]);

    });
  }
  gg(){
    console.log(this.signUpForm);
  }
  onAddHobbies(){
    console.log(this.signUpForm.get('hobbies'));
    const control =new FormControl(null,Validators.required);
   (<FormArray>this.signUpForm.get('hobbies')).push(control);

  };
  
  onForbiddenName(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenName.indexOf(control.value)!=-1){
      return({'name':true})
    }

      return null;


  }

}
