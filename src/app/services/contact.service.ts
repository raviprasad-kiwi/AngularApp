import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Contact } from '../contact/contact';
import { HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /// http://api.bedu.co.in:8080/api/v.1/send/contact
  baseURL = 'http://api.bedu.co.in:8080/api/v.1/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  contactSubmit(contact: Contact) {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.post<Contact>(this.baseURL + 'send/contact', contact, this.httpOptions);
  }
}
