import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModuleModule } from './admin-routing-module.module';
@NgModule({
  declarations: [AdminLayoutComponent, NavbarComponent, SidebarComponent],
  exports: [NavbarComponent, AdminLayoutComponent],
  imports: [CommonModule, MatIconModule, AdminRoutingModuleModule],
})
export class AdminLayoutModule {}
