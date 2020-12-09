import {Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavService} from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {
  showTopTwo = false;

  @ViewChild('targetDiv') targetDiv: ElementRef;

  constructor(private el: ElementRef, private render: Renderer2,
              private router: Router, private route: ActivatedRoute,
              private navService: NavService) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
  }

  ngDoCheck() {
    const t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 650) {
      this.el.nativeElement.querySelector('.nav-top').style.background = 'rgba(0,0,0,0.8)';
    } else {
      this.el.nativeElement.querySelector('.nav-top').style.background = '';
    }
  }

  public onClickLogin(event: boolean) {
    this.navService.registerOrLogin = event;
  }

  // public onClickRouter(event: any) {
  //   this.router.navigate(['/nav/home'], {relativeTo: this.route}).then(() => {
  //     this.navService.onNavigated.emit('111');
  //   });
  // }

}
