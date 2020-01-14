import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAgenciesComponent } from './grid-agencies.component';

describe('GridAgenciesComponent', () => {
  let component: GridAgenciesComponent;
  let fixture: ComponentFixture<GridAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
