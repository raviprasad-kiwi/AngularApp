import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShown: any = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  updateClasses(event) {
    if (!this.isShown) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }
}
