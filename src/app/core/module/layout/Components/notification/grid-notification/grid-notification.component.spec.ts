import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNotificationComponent } from './grid-notification.component';

describe('GridNotificationComponent', () => {
  let component: GridNotificationComponent;
  let fixture: ComponentFixture<GridNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
