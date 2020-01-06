import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadNecessityFilesComponent } from './download-necessity-files.component';

describe('DownloadNecessityFilesComponent', () => {
  let component: DownloadNecessityFilesComponent;
  let fixture: ComponentFixture<DownloadNecessityFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadNecessityFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadNecessityFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
