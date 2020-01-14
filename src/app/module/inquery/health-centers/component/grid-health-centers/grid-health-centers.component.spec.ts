import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHealthCentersComponent } from './grid-health-centers.component';

describe('GridHealthCentersComponent', () => {
  let component: GridHealthCentersComponent;
  let fixture: ComponentFixture<GridHealthCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHealthCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHealthCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
