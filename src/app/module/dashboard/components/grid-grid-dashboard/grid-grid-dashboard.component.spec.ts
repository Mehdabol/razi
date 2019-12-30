import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGridDashboardComponent } from './grid-grid-dashboard.component';

describe('GridGridDashboardComponent', () => {
  let component: GridGridDashboardComponent;
  let fixture: ComponentFixture<GridGridDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGridDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGridDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
