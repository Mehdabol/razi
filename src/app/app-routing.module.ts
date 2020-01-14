import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './core/module/layout/base-layout/base-layout.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import {AuthGuard} from './core/guard/auth-guard.service';
import {PagesLayoutComponent} from './core/module/layout/pages-layout/pages-layout.component';
import {LoginComponent} from './module/auth/login/login.component';
import {AddRegisteredComponent} from './module/dashboard/components/add-registered/add-registered.component';
import {DetailForm1Component} from './module/dashboard/components/detail-form1/detail-form1.component';
import {DetailForm2Component} from './module/dashboard/components/detail-form2/detail-form2.component';
import {TimeLineGoComponent} from './module/dashboard/components/time-line-go/time-line-go.component';
import {RegisterComponent} from './module/auth/register/register.component';
import {ChangePasswordComponent} from './module/auth/change-password/change-password.component';
import {PageInsuranceInsuredComponent} from './module/Insurance/insurance-insured/page/page-insurance-insured/page-insurance-insured.component';
import {PageTotalDamageTreatmentComponent} from './module/Insurance/total-damage-treatment/page/page-total-damage-treatment/page-total-damage-treatment.component';
import {ResetPasswordComponent} from './module/auth/reset-password/reset-password.component';
import {PageUniqueCodeInsuranceComponent} from './module/Insurance/unique-code-insurance/page/page-unique-code-insurance/page-unique-code-insurance.component';
import {PageInsurancePrintedPolicyNumberComponent} from './module/Insurance/insurance-printed-policy-number/page/page-insurance-printed-policy-number/page-insurance-printed-policy-number.component';
import {DownloadNecessityFilesComponent} from './module/files/download-necessity-files/components/download-necessity-files.component';
import {DownloadAppComponent} from './module/files/download-app/component/download-app/download-app.component';
import {CheckInsurancePolicyComponent} from './module/inquery/Check-authenticity-insurance-policy/components/check-insurance-policy/check-insurance-policy.component';
import {OfferFormsComponent} from './module/files/offer/components/offer-forms/offer-forms.component';
import {AgenciesComponent} from './module/inquery/agencies/components/agencies.component';
import {GridAgenciesComponent} from './module/inquery/agencies/components/grid-agencies/grid-agencies.component';
import {PageHealthCentersComponent} from './module/inquery/health-centers/component/page-health-centers/page-health-centers.component';
import {GridHealthCentersComponent} from './module/inquery/health-centers/component/grid-health-centers/grid-health-centers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'pages',
    component: BaseLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'add', component: AddRegisteredComponent, canActivate: [AuthGuard]},
      {path: 'time', component: TimeLineGoComponent, canActivate: [AuthGuard]},
      {path: 'detail1/:id', component: DetailForm1Component, canActivate: [AuthGuard]},
      {path: 'detail2/:id', component: DetailForm2Component, canActivate: [AuthGuard]},
      {path: 'insurance-insured', component: PageInsuranceInsuredComponent, canActivate: [AuthGuard]},
      {path: 'unic-insurance', component: PageUniqueCodeInsuranceComponent, canActivate: [AuthGuard]},
      {path: 'policy-insurance', component: PageInsurancePrintedPolicyNumberComponent, canActivate: [AuthGuard]},
      {path: 'total-damage-treatment', component: PageTotalDamageTreatmentComponent, canActivate: [AuthGuard]},
      {path: 'download-necessity-files', component: DownloadNecessityFilesComponent},
      {path: 'download-app', component: DownloadAppComponent},
      {path: 'check-insurance-policy', component: CheckInsurancePolicyComponent},
      {path: 'offer-forms', component: OfferFormsComponent},
      {path: 'agencies', component: AgenciesComponent},
      {path: 'agencies-grid/:city/:ostan', component: GridAgenciesComponent},
      {path: 'health-centers', component: PageHealthCentersComponent},
      {path: 'health-centers-grid/:city/:ostan/:service', component: GridHealthCentersComponent},
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
