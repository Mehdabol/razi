import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHealthCentersComponent } from './page-health-centers.component';

describe('PageHealthCentersComponent', () => {
  let component: PageHealthCentersComponent;
  let fixture: ComponentFixture<PageHealthCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHealthCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHealthCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
