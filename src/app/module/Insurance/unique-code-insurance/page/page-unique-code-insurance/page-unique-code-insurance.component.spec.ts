import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUniqueCodeInsuranceComponent } from './page-unique-code-insurance.component';

describe('PageUniqueCodeInsuranceComponent', () => {
  let component: PageUniqueCodeInsuranceComponent;
  let fixture: ComponentFixture<PageUniqueCodeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUniqueCodeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUniqueCodeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
