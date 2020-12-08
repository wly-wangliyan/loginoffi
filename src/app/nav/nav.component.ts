import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showTopTwo = false;
  @ViewChild('targetDiv') targetDiv: ElementRef;

  constructor(private el: ElementRef, private render: Renderer2,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log(this.el.nativeElement);

  }

  ngDoCheck() {
    const t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 650) {
      this.el.nativeElement.querySelector('.nav-top').style.background = 'rgba(0,0,0,0.8)';
    } else {
      this.el.nativeElement.querySelector('.nav-top').style.background = '';
    }
  }
}
