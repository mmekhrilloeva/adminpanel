import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModuleModule } from './admin-layout/admin-routing-module.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModuleModule],
  exports: [RouterModule, AdminRoutingModuleModule],
})
export class AppRoutingModule {}
