import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { GuardService } from './modules/authentication/services/guard.service';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notfound', component: ErrorPageComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
