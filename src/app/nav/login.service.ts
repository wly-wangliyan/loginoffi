import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public registerOrLogin: boolean;
  constructor() { }
}
