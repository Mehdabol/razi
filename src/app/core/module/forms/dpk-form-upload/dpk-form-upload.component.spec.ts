import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpkFormUploadComponent } from './dpk-form-upload.component';

describe('DpkFormUploadComponent', () => {
  let component: DpkFormUploadComponent;
  let fixture: ComponentFixture<DpkFormUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpkFormUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpkFormUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
