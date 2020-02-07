import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'posts', component: PostComponent},
  {path: 'members', component: MembersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
