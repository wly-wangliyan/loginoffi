import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-industry-information',
  templateUrl: './industry-information.component.html',
  styleUrls: ['./industry-information.component.css']
})
export class IndustryInformationComponent implements OnInit, AfterViewInit, OnDestroy {
  public industryArray: Array<IndustryInfo>;
  public subscribeScroll: Subscription;

  constructor(public navService: NavService,
              private router: Router, private route: ActivatedRoute,
              private el: ElementRef) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.industryArray = [
      new IndustryInfo('青岛完成51处智慧停车引屏安装调试 预计2020年12月底启用', '发布时间：2020-12-07', '【青岛网12月3日讯】近日，不少市民驱车走在香港中路等市区主干道路上时，会发现路边多了崭新的智慧停车引导电子屏幕。据悉，这是我市即将投用的智慧停车信息发布系统终端设备，后期这些电子屏幕上可实时显示周边部分停车场的空余泊位数量等动态信息，预计本月底可正式投用。'),
      new IndustryInfo('合肥蜀山区：落实停车场备案管理 监管停车诱导系统运行', '发布时间：2020-12-04', '【合肥市广播电视台12月3日讯】随着合肥市经济的快速发展，城市机动车保有量迅速增加，市民在城区驾车出行办事的时候，常常为找不到车位停放而烦恼。停车难的问题日益突出，影响着广大市民的出行和生活。近年来，合肥市针对机动车数量与日俱增、停车场建设存在困难、现有停车资源利用...'),
      new IndustryInfo('开远静态交通诱导系统即将建成', '发布时间：2020-12-03', '【红河日报12月1日讯】如今出行难、停车难成为了城市发展的一大“顽疾”，许多驾驶员为了寻找车位经常要在路上兜好几圈，不仅影响来往车流与行人的安全，还易造成交通拥堵等问题。为解决这一难题，开远市建成了静态交通诱导系统。'),
      new IndustryInfo('黄石：近10万个停车泊位数据已接入平台', '发布时间：2020-12-02', '【黄石日报12月2日讯】现代化生活从何体现？当数据跑路代替人工寻找，“智慧”生活就悄然而至。1日，走进黄石市智慧停车指挥中心，只见技术人员正在对万达广场地下停车库数据录入进行调试。经过一年多的平台建设，目前该指挥中心数据管理进入平稳动态管理状态。'),
      new IndustryInfo('淮安市智能停车诱导系统正式投入运行', '发布时间：2020-11-26', '【淮安市广播电视台11月25日讯】今天下午，记者从淮安市智能停车诱导系统新闻发布会上获悉，为引导机动车停放、提高公共停车泊位周转率，解决共享单车乱停乱放等问题，市城管局会同市交通控股公司投资建设的淮安市智能停车诱导系统正式投入运行。'),
      new IndustryInfo('昆明积极推进智慧停车平台建设', '发布时间：2020-11-25', '【无线昆明11月25日讯】 昨天（11月24日），昆明市政协就“发挥智慧停车技术优势，解决停车难及道路拥堵问题”进行调研。为提升昆明市停车智慧化、规范化管理水平，有效解决停车难问题，昆明市出台了《机动车停车场管理办法》、《智慧交通建设三年行动计划（2019-2021）》等相关文件...'),
    ];
  }

  ngAfterViewInit() {
    this.subscribeScroll = fromEvent(window, 'scroll')
      .subscribe((event) => {
        const t = document.documentElement.scrollTop;
        if (t > 0) {
          console.log('iioo');
          this.el.nativeElement.querySelector('.main-header').style.background = 'rgba(0,0,0,0.8)';
        } else {
          this.el.nativeElement.querySelector('.main-header').style.background = '';
        }
      });
  }

  public onClickAlert() {
    alert('购买资讯费用，1元/条');
  }

  public onClickLogin(event: boolean) {
    this.navService.registerOrLogin = event;
  }

  public onClickRouterToHome() {
    this.router.navigate(['/nav'], {relativeTo: this.route});
    document.documentElement.scrollTop = 0;
  }

  public ngOnDestroy() {
    this.subscribeScroll && this.subscribeScroll.unsubscribe();
  }

}

export class IndustryInfo {
  constructor(public title: string,
              public deliveryTime: string,
              public text: string) {
  }
}
