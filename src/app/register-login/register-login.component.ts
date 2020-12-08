import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public isActive: string;

  constructor() {
  }

  ngOnInit() {
  }

}
