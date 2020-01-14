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
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
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
import {NgxMaskModule} from 'ngx-mask';
import {DashboardBarChartComponent} from './module/dashboard/components/dashboard-bar-chart/dashboard-bar-chart.component';
import {TimeLineGoComponent} from './module/dashboard/components/time-line-go/time-line-go.component';
import {RegisterComponent} from './module/auth/register/register.component';
import {ChangePasswordComponent} from './module/auth/change-password/change-password.component';
import {NotificationService} from './core/module/layout/Components/notification/service/notification.service';
import {ConvertDateService} from './module/dashboard/service/convert-date.service';

import {AgGridModule} from 'ag-grid-angular';
import {GridDetailButtonComponent} from './module/dashboard/components/grid-detail-button/grid-detail-button.component';
import {TimlineButtonGridComponent} from './module/dashboard/components/timline-button-grid/timline-button-grid.component';
import {PageInsuranceInsuredComponent} from './module/Insurance/insurance-insured/page/page-insurance-insured/page-insurance-insured.component';
import {GridInsuranceInsuredComponent} from './module/Insurance/insurance-insured/component/grid-insurance-insured/grid-insurance-insured.component';
import {InsuranceInsuredService} from './module/Insurance/insurance-insured/service/insurance-insured.service';
import {GridTotalDamageTreatmentComponent} from './module/Insurance/total-damage-treatment/component/grid-total-damage-treatment/grid-total-damage-treatment.component';
import {PageTotalDamageTreatmentComponent} from './module/Insurance/total-damage-treatment/page/page-total-damage-treatment/page-total-damage-treatment.component';
import {TotalDamageTreatmentService} from './module/Insurance/total-damage-treatment/service/total-damage-treatment.service';
import {ResetPasswordComponent} from './module/auth/reset-password/reset-password.component';
import {GridUniqueCodeInsuranceComponent} from './module/Insurance/unique-code-insurance/components/grid-unique-code-insurance/grid-unique-code-insurance.component';
import {PageUniqueCodeInsuranceComponent} from './module/Insurance/unique-code-insurance/page/page-unique-code-insurance/page-unique-code-insurance.component';
import {GridInsurancePrintedPolicyNumberComponent} from './module/Insurance/insurance-printed-policy-number/component/grid-insurance-printed-policy-number/grid-insurance-printed-policy-number.component';
import {PageInsurancePrintedPolicyNumberComponent} from './module/Insurance/insurance-printed-policy-number/page/page-insurance-printed-policy-number/page-insurance-printed-policy-number.component';
import {DownloadNecessityFilesComponent} from './module/files/download-necessity-files/components/download-necessity-files.component';
import {DownloadAppComponent} from './module/files/download-app/component/download-app/download-app.component';
import {CheckInsurancePolicyComponent} from './module/inquery/Check-authenticity-insurance-policy/components/check-insurance-policy/check-insurance-policy.component';
import {OfferFormsComponent} from './module/files/offer/components/offer-forms/offer-forms.component';
import {CheckInsuranceService} from './module/inquery/Check-authenticity-insurance-policy/service/check-insurance.service';
import {AgenciesComponent} from './module/inquery/agencies/components/agencies.component';
import {AgenciesService} from './module/inquery/agencies/service/agencies.service';
import {GridAgenciesComponent} from './module/inquery/agencies/components/grid-agencies/grid-agencies.component';
import { PageHealthCentersComponent } from './module/inquery/health-centers/component/page-health-centers/page-health-centers.component';
import { GridHealthCentersComponent } from './module/inquery/health-centers/component/grid-health-centers/grid-health-centers.component';

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
    // LoginComponent,
    SpinnerComponent,
    NotificationComponent,
    GridGridDashboardComponent,
    AddRegisteredComponent,
    DetailForm1Component,
    DetailForm2Component,
    DashboardBarChartComponent,
    TimeLineGoComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    GridDetailButtonComponent,
    TimlineButtonGridComponent,
    PageInsuranceInsuredComponent,
    GridInsuranceInsuredComponent,
    GridTotalDamageTreatmentComponent,
    PageTotalDamageTreatmentComponent,
    ResetPasswordComponent,
    GridUniqueCodeInsuranceComponent,
    PageUniqueCodeInsuranceComponent,
    GridInsurancePrintedPolicyNumberComponent,
    PageInsurancePrintedPolicyNumberComponent,
    DownloadNecessityFilesComponent,
    DownloadAppComponent,
    CheckInsurancePolicyComponent,
    OfferFormsComponent,
    AgenciesComponent,
    GridAgenciesComponent,
    PageHealthCentersComponent,
    GridHealthCentersComponent
  ],
  imports: [
    AppRoutingModule,
    AgGridModule.withComponents([GridDetailButtonComponent, TimlineButtonGridComponent]),
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
    ConvertDateService,
    NotificationService,
    AgenciesService,
    InsuranceInsuredService,
    TotalDamageTreatmentService,
    CheckInsuranceService,
    TenderService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
