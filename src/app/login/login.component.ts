import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error:boolean = false;

  constructor(private fb:FormBuilder, private _productservice: ProductService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/)]]
  });
  }

  onSubmit(login){
    console.log("From login Form:" + login.value)
    if(this.loginForm.value.password == "" || this.loginForm.value.email == "") {
     this.error = true;
    }
    this._productservice.getLoginDetails(login);
  }

}
