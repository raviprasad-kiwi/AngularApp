import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formr;
  constructor(private fb: FormBuilder,  private myRoute: Router,  private auth: AuthService) { 
    this.formr = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  register() {
    debugger;
    console.log(this.formr);
    if (this.formr.valid) {
      this.auth.sendToken(this.formr.value.email)
      this.myRoute.navigate(["login"]);
    }
  }
}
