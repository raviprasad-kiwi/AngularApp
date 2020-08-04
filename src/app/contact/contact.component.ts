import { Component, OnInit, NgModule } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from './contact';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  loginForm: FormGroup;
  msg;
  isValid = false;
  contact = new Contact();

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
      firstname: ['', Validators.nullValidator],
      lastname: ['', Validators.nullValidator],
      mobile: ['', Validators.nullValidator]
  });
  }
  get fcontrol() { return this.loginForm.controls; }
  onSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.loginForm.invalid) {
      return;
    }
    this.contact.first_name = this.fcontrol.firstname.value;
    this.contact.last_name = this.fcontrol.lastname.value;
    this.contact.email = this.fcontrol.email.value;
    this.contact.mobile = this.fcontrol.mobile.value;
    this.contact.message = this.fcontrol.message.value;

    return this.contactService.contactSubmit(this.contact).pipe(first())
    .subscribe(
        data => {
            console.log(data);
            // this.isValid = true;
            this.msg = 'Email Sent Successfully';
            alert('Email Sent Successfully');
            this.loginForm.reset();
        },
        error => {
          // this.isValid = true;
          this.msg = 'Error in sending mails';
          alert('Something worng happen! Please try after some time');
          this.loginForm.reset();
        });
  }

}
