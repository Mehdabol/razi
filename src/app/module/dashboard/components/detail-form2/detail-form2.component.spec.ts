import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForm2Component } from './detail-form2.component';

describe('DetailForm2Component', () => {
  let component: DetailForm2Component;
  let fixture: ComponentFixture<DetailForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
