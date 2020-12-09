import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public isActive: boolean;


  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.isActive = this.navService.registerOrLogin;
    document.documentElement.scrollTop = 0;
  }

  public onClickChangeStyle(event: boolean) {
    this.isActive = event;
  }


}
