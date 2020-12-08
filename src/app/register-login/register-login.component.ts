import {Component, EventEmitter, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../nav/login.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public isActive: boolean;


  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
          this.isActive = this.loginService.registerOrLogin;
  }

  public onClickChangeStyle(event: boolean) {
    this.isActive = event;
  }



}
