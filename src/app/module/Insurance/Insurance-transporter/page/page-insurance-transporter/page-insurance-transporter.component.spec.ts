import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsuranceTransporterComponent } from './page-insurance-transporter.component';

describe('PageInsuranceTransporterComponent', () => {
  let component: PageInsuranceTransporterComponent;
  let fixture: ComponentFixture<PageInsuranceTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsuranceTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsuranceTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
