import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForm1Component } from './detail-form1.component';

describe('DetailForm1Component', () => {
  let component: DetailForm1Component;
  let fixture: ComponentFixture<DetailForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
