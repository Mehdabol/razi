import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/module/layout/Components/header/header.component';
import {SidebarComponent} from './core/module/layout/Components/sidebar/sidebar.component';
import {FooterComponent} from './core/module/layout/Components/footer/footer.component';
import {PagesLayoutComponent} from './core/module/layout/pages-layout/pages-layout.component';
import {BaseLayoutComponent} from './core/module/layout/base-layout/base-layout.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import {ThemeSettingComponent} from './core/module/layout/Components/theme-setting/theme-setting.component';
import {LoginComponent} from './module/auth/login/login.component';
import {AuthService} from './module/auth/service/auth.service';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './core/guard/auth-guard.service';
import {FormValidateService} from './core/services/Form-Validate.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpinnerComponent} from './core/module/spinner/spinner.component';
import {NotificationComponent} from './core/module/layout/Components/notification/notification.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {GridGridDashboardComponent} from './module/dashboard/components/grid-grid-dashboard/grid-grid-dashboard.component';
import {AddRegisteredComponent} from './module/dashboard/components/add-registered/add-registered.component';
import {TenderService} from './module/dashboard/service/tender.service';
import {MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {DpkFormUploadModule} from './core/module/forms/dpk-form-upload/dpk-form-upload.module';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JwtInterceptor} from './core/interceptor/jwt.interceptor';
import {LoaderInterceptor} from './core/interceptor/loader.interceptor';
import {DetailForm1Component} from './module/dashboard/components/detail-form1/detail-form1.component';
import {DetailForm2Component} from './module/dashboard/components/detail-form2/detail-form2.component';
import {GridNotificationComponent} from './core/module/layout/Components/notification/grid-notification/grid-notification.component';
import {NgxMaskModule} from 'ngx-mask';
import {DashboardBarChartComponent} from './module/dashboard/components/dashboard-bar-chart/dashboard-bar-chart.component';
import {TimeLineGoComponent} from './module/dashboard/components/time-line-go/time-line-go.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagesLayoutComponent,
    BaseLayoutComponent,
    DashboardComponent,
    ThemeSettingComponent,
    LoginComponent,
    SpinnerComponent,
    NotificationComponent,
    GridGridDashboardComponent,
    AddRegisteredComponent,
    DetailForm1Component,
    DetailForm2Component,
    DashboardBarChartComponent,
    GridNotificationComponent,
    TimeLineGoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AutocompleteLibModule,
    MatInputModule,
    HttpClientModule,
    DpDatePickerModule,
    DpkFormUploadModule,
    MatSlideToggleModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-left'
    }),

  ],
  providers: [AuthService, AuthGuard, FormValidateService,
    TenderService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
