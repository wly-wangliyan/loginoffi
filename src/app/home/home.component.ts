import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public array: Array<Array<Product>>;
  public contacts: Array<Contact>;
  isVisible = false;

  constructor() {
  }

  ngOnInit() {
    this.array = [[
      new Product('../../assets/img/01沈阳智慧停车平台.png', '沈阳智慧停车平台', '城市项目'),
      new Product('../../assets/img/02本溪智慧停车平台.png', '本溪智慧停车平台', '城市项目'),
      new Product('../../assets/img/03沈阳全民健身中心.png', '沈阳全民健身中心', '停车场项目'),
      new Product('../../assets/img/04沈阳国际软件园.png', '沈阳国际软件园', '停车场项目'),
      new Product('../../assets/img/05东北大厦.png', '东北大厦', '停车场项目'),
      new Product('../../assets/img/06东北国际医院.png', '东北国际医院', '停车场项目'),
      new Product('../../assets/img/07鞍山西站.png', '鞍山西站', '停车场项目'),
      new Product('../../assets/img/08沈阳医学院附属中心医院.png', '沈阳医学院附属中心医院', '停车场项目'),
    ], [
      new Product('../../assets/img/01沈北红星欧丽洛雅.png', '沈北红星欧丽洛雅', '停车场项目'),
      new Product('../../assets/img/02沈阳胸科医院.png', '沈阳胸科医院', '停车场项目'),
      new Product('../../assets/img/03沈阳太清宫.png', '沈阳太清宫', '停车场项目'),
      new Product('../../assets/img/04友谊宾馆.png', '友谊宾馆', '停车场项目'),
      new Product('../../assets/img/05天赐街停车场.png', '天赐街停车场', '停车场项目'),
      new Product('../../assets/img/06文峰大厦.png', '文峰大厦', '停车场项目'),
      new Product('../../assets/img/07沈阳市财政局.png', '沈阳市财政局', '停车场项目'),
      new Product('../../assets/img/08太原街五洲商业广场.png', '太原街五洲商业广场', '停车场项目'),
    ]];
    this.contacts = [
      new Contact('../../assets/img/service-call.png', '服务热线', '010-82743605'),
      new Contact('../../assets/img/business.png', '商务合作', 'fengyangang@zhumengyuan.com'),
      new Contact('../../assets/img/company-address.png', '公司地址', '北京市海淀区上地三街中黎科技园2层C223')
    ];
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }


}

export class Product {
  constructor(
    public img: string,
    public title: string,
    public label: string,
  ) {
  }

}

export class Contact {
  constructor(
    public img: string,
    public title: string,
    public price: string,
  ) {
  }

}
