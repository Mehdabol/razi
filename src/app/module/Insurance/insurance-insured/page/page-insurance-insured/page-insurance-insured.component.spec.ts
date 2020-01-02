import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsuranceInsuredComponent } from './page-insurance-insured.component';

describe('PageInsuranceInsuredComponent', () => {
  let component: PageInsuranceInsuredComponent;
  let fixture: ComponentFixture<PageInsuranceInsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsuranceInsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsuranceInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
