import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInsurancePolicyComponent } from './check-insurance-policy.component';

describe('CheckInsurancePolicyComponent', () => {
  let component: CheckInsurancePolicyComponent;
  let fixture: ComponentFixture<CheckInsurancePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInsurancePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInsurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
