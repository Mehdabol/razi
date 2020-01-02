import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInsuranceInsuredComponent } from './grid-insurance-insured.component';

describe('GridInsuranceInsuredComponent', () => {
  let component: GridInsuranceInsuredComponent;
  let fixture: ComponentFixture<GridInsuranceInsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInsuranceInsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInsuranceInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
