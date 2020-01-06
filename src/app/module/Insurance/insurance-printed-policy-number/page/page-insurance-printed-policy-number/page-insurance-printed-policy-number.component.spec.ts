import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsurancePrintedPolicyNumberComponent } from './page-insurance-printed-policy-number.component';

describe('PageInsurancePrintedPolicyNumberComponent', () => {
  let component: PageInsurancePrintedPolicyNumberComponent;
  let fixture: ComponentFixture<PageInsurancePrintedPolicyNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsurancePrintedPolicyNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsurancePrintedPolicyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
