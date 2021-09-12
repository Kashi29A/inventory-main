import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'inventory', component: DatatableComponent, canActivate: [ActivateGuard] },
  { path: 'usermanagement', component: UserManagementComponent, canActivate: [UserGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
