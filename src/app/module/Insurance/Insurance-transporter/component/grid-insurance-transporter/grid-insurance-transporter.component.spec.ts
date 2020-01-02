import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInsuranceTransporterComponent } from './grid-insurance-transporter.component';

describe('GridInsuranceTransporterComponent', () => {
  let component: GridInsuranceTransporterComponent;
  let fixture: ComponentFixture<GridInsuranceTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInsuranceTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInsuranceTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
