import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimlineButtonGridComponent } from './timline-button-grid.component';

describe('TimlineButtonGridComponent', () => {
  let component: TimlineButtonGridComponent;
  let fixture: ComponentFixture<TimlineButtonGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimlineButtonGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimlineButtonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
