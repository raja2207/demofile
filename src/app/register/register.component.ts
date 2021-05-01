import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerpage= new FormGroup({
    FirstName: new FormControl('',Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('',Validators.required),
    DateOfBirth: new FormControl(Validators.required),
    PhoneNumber: new FormControl('',[Validators.required, Validators.maxLength(13),Validators.minLength(10)]),
    NewPassword: new FormControl('',[Validators.required, Validators.minLength(7)]),
    ConformPassword: new FormControl('',[Validators.required, Validators.minLength(7)]),
    gender: new FormControl('')   
  });

  constructor() { }

  ngOnInit(): void {
  }

  regsub() {
    window.alert('sccussfully register')
    console.log(this.registerpage.value);
    
  }

}
