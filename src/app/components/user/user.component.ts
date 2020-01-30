import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User = {
    firstName : '',
    lastName : '',
    email : '',
    isHide: true
  };
  
  users: User[];
  showExtended:boolean=false;
  showForm:boolean=false;
  @ViewChild('userFrom',null) form:any;
  constructor(private data: DataService) { 
    this.getUsers();
  }

  ngOnInit() {
    
  }
  getUsers() {
    this.data.getUser().subscribe(users=>{this.users=users});
  }

  onSubmit({value, valid}:{value:User, valid:boolean}){
    if(!valid){
      console.log("invalid");
    }else {
        this.users.unshift(value);
    }
  }

}
