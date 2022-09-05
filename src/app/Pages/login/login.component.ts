import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //private fb:FormBuilder = new FormBuilder()
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
  
      correo:["",[Validators.required,Validators.minLength(3)]],
      clave:["",[Validators.required,Validators.minLength(6)]]
    })
  }
  ingresar(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}