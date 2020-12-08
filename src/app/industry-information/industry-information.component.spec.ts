import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryInformationComponent } from './industry-information.component';

describe('IndustryInformationComponent', () => {
  let component: IndustryInformationComponent;
  let fixture: ComponentFixture<IndustryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
