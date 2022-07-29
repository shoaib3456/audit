import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeChargesComponent } from './pages/fee-charges/fee-charges.component';
import { HeadofficeSetupComponent } from './pages/headoffice-setup/headoffice-setup.component';
import { OfficeManagementComponent } from './pages/office-management/office-management.component';

const routes: Routes = [
  {path:"",component:HeadofficeSetupComponent},
  {path:"office-management",component:OfficeManagementComponent},
  {path:"fee-charges",component:FeeChargesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
