import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFormsComponent } from './offer-forms.component';

describe('OfferFormsComponent', () => {
  let component: OfferFormsComponent;
  let fixture: ComponentFixture<OfferFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
