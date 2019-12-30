import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineGoComponent } from './time-line-go.component';

describe('TimeLineGoComponent', () => {
  let component: TimeLineGoComponent;
  let fixture: ComponentFixture<TimeLineGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
