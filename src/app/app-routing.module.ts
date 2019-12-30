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
import {GridNotificationComponent} from './core/module/layout/Components/notification/grid-notification/grid-notification.component';
import {TimeLineGoComponent} from './module/dashboard/components/time-line-go/time-line-go.component';

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
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'notification/:id', component: GridNotificationComponent, canActivate: [AuthGuard]},
      {path: 'add', component: AddRegisteredComponent, canActivate: [AuthGuard]} ,
      {path: 'time', component: TimeLineGoComponent, canActivate: [AuthGuard]} ,
      {path: 'detail1/:id', component: DetailForm1Component, canActivate: [AuthGuard]} ,
      {path: 'detail2/:id', component: DetailForm2Component, canActivate: [AuthGuard]} ,
      // {
      //     path: 'tender',
      //     loadChildren: './module/tender_Offer/tender.module#TenderModule',
      //     data: {extraParameter: 'elementsMenu'}
      // },
      // {
      //     path: 'tenders-result',
      //     loadChildren: './module/tenders-result/tenders-result.module#TendersResultModule',
      //     data: {extraParameter: 'elementsMenu'}
      // },
      // {
      //     path: 'dashboard',
      //     loadChildren: './module/dashboard/dashboard.module#DashboardModule',
      //     data: {extraParameter: 'elementsMenu'}
      // },
      // {
      //   path: 'registered',
      //   loadChildren: './module/registred-requestes/registered.module#RegisteredModule',
      //   data: {extraParameter: 'elementsMenu'}
      // },
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
