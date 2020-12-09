import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavComponent} from './nav/nav.component';
import {ForgotpwdComponent} from './forgotpwd/forgotpwd.component';
import {IndustryInformationComponent} from './industry-information/industry-information.component';
import {RegisterLoginComponent} from './register-login/register-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nav',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgotpwd',
    component: ForgotpwdComponent
  },
  {
    path: 'industry-information',
    component: IndustryInformationComponent
  },
  {
    path: 'register-login',
    component: RegisterLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
