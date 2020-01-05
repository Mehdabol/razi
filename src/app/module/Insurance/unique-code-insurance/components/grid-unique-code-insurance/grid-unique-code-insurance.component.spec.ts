import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUniqueCodeInsuranceComponent } from './grid-unique-code-insurance.component';

describe('GridUniqueCodeInsuranceComponent', () => {
  let component: GridUniqueCodeInsuranceComponent;
  let fixture: ComponentFixture<GridUniqueCodeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUniqueCodeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUniqueCodeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
