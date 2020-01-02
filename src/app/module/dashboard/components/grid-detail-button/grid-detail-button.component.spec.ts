import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDetailButtonComponent } from './grid-detail-button.component';

describe('GridDetailButtonComponent', () => {
  let component: GridDetailButtonComponent;
  let fixture: ComponentFixture<GridDetailButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDetailButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
