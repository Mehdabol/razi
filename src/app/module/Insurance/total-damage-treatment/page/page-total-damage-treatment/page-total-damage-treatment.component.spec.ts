import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTotalDamageTreatmentComponent } from './page-total-damage-treatment.component';

describe('PageTotalDamageTreatmentComponent', () => {
  let component: PageTotalDamageTreatmentComponent;
  let fixture: ComponentFixture<PageTotalDamageTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTotalDamageTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTotalDamageTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
