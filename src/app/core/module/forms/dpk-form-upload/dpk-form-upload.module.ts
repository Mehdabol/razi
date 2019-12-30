import {NgModule} from '@angular/core';
import {DpkFormUploadComponent} from './dpk-form-upload.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxFileDropModule} from 'ngx-file-drop';
import {AlertService} from "../../../services/alert.service";

@NgModule({
  declarations: [DpkFormUploadComponent],
  imports: [
    CommonModule,
    FormsModule ,
    NgxFileDropModule
  ],
  providers: [AlertService],
  exports: [DpkFormUploadComponent]
})
export class DpkFormUploadModule {
}
