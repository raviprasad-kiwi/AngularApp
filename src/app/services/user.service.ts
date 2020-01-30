import { Injectable } from '@angular/core';
import { User } from 'src/model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: Observable<any>;
  users: User[];
  constructor() { 
    this.users=[
      {firstName:'Rahul', lastName:'Dravid', email:"rahul@gmail.com", isHide:true},
      {firstName:'Robin', lastName:'Singh', email:"robin@yopmail.com", isHide:false}];
  }
  getUser(): Observable<User[]>{    
    return of(this.users);
  }
  addUser(user: User){
    this.users.unshift(user);
  }
}