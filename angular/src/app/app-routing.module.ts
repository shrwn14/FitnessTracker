import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IRouteData } from './models/index';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserProfileComponent,
    data:  {
        title: 'User Profile',
        breadcrumbs: [
            { label: 'User Profile', routerLink: '', isActive: true }
        ]
    } as IRouteData
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },

  {
    path: 'user/profile', 
    component: UserProfileComponent,
    data:  {
        title: 'User Profile',
        breadcrumbs: [
            { label: 'User Profile', routerLink: '', isActive: true }
        ]
    } as IRouteData
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
