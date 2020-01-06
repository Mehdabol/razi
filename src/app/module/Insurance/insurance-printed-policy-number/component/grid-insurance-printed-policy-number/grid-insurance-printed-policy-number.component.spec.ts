import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInsurancePrintedPolicyNumberComponent } from './grid-insurance-printed-policy-number.component';

describe('GridInsurancePrintedPolicyNumberComponent', () => {
  let component: GridInsurancePrintedPolicyNumberComponent;
  let fixture: ComponentFixture<GridInsurancePrintedPolicyNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInsurancePrintedPolicyNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInsurancePrintedPolicyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
