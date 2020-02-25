import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  msg;
  isValid = false;
  constructor(private fb: FormBuilder,  private myRoute: Router,  private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  login() {
    if (this.form.valid) {
      if (this.auth.isLoggedIn()) {
        this.myRoute.navigate(['/']);
      } else {
        this.isValid = false;
        this.msg = 'Wrong Username & Password!' ;
      }
    } else {
      this.isValid = false;
      this.msg = 'Invalid Username & Password!';
    }
  }
}
