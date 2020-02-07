import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MembersComponent } from './components/members/members.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostComponent,
    PostFormComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    MembersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService,DataService, PostService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
