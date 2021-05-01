import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginpage= new FormGroup({
    userid: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(7)])

  });

  constructor() { }

  ngOnInit(): void {
  }

  loginsub() {
    console.log(this.loginpage.value);
    
  }

}
