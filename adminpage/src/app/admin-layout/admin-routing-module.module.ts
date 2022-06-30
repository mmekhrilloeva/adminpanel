import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  { path: 'maps', component: NavbarComponent },
  { path: 'dashboard', component: NavbarComponent },
  { path: 'icons', component: NavbarComponent },
  { path: 'notifications', component: NavbarComponent },
  { path: 'user', component: NavbarComponent },
  { path: 'table', component: NavbarComponent },
  { path: 'typography', component: NavbarComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModuleModule {}
