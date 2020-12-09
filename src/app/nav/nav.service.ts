import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public registerOrLogin: boolean;
  // public onNavigated: EventEmitter<string> = new EventEmitter<string>();
}
