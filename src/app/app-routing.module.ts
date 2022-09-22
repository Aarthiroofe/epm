import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo :'login',
    pathMatch :'full',
   
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'employe-list', loadChildren: () => import('./pages/employe-list/employe-list.module').then(m => m.EmployeListModule) },
  { path: 'employe-detail', loadChildren: () => import('./pages/employe-detail/employe-detail.module').then(m => m.EmployeDetailModule) },
  { path: 'create-employe', loadChildren: () => import('./pages/create-employe/create-employe.module').then(m => m.CreateEmployeModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dshboard/dshboard.module').then(m => m.DshboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
