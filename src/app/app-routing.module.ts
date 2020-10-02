import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const  routes:  Routes  = [
  {path: "home", component: HomeComponent},
  {path: "search",component: GithubComponent},
  { path: 'users/:id', component: UserDetailsComponent },
  {"pathMatch":"full","redirectTo":"/home","path":"" },
  {path: "**",component: NotFoundComponent}
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
