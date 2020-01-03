import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTotalDamageTreatmentComponent } from './grid-total-damage-treatment.component';

describe('GridTotalDamageTreatmentComponent', () => {
  let component: GridTotalDamageTreatmentComponent;
  let fixture: ComponentFixture<GridTotalDamageTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTotalDamageTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTotalDamageTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
