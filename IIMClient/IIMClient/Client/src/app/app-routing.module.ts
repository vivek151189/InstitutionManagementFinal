import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './staff/list/list.component';
import { AddComponent } from './staff/add/add.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path:"home", component:HomeComponent },
  { path:"register", component:RegisterComponent },
  { path:"admin", component:LoginComponent },
  { path:"admin/list", component:ListComponent },
  { path:"admin/add", component:AddComponent },
  { path:"admin/list/update/:id", component:AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
