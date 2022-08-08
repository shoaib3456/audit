import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { EditBankingDetailsComponent } from './pages/edit-head-office-setup/edit-banking-details/edit-banking-details.component';
import { EditCompanyDocumentComponent } from './pages/edit-head-office-setup/edit-company-document/edit-company-document.component';
import { EditDepartmentsComponent } from './pages/edit-head-office-setup/edit-departments/edit-departments.component';
import { EditHeadOfOfficeComponent } from './pages/edit-head-office-setup/edit-head-of-office/edit-head-of-office.component';
import { EditHeadOfficeInformationComponent } from './pages/edit-head-office-setup/edit-head-office-information/edit-head-office-information.component';
import { EditHeadofficeSetupComponent } from './pages/edit-headoffice-setup/edit-headoffice-setup.component';
import { FeeChargesComponent } from './pages/fee-charges/fee-charges.component';
import { HeadofficeSetupComponent } from './pages/headoffice-setup/headoffice-setup.component';
import { OfficeManagementComponent } from './pages/office-management/office-management.component';
import { OfficeSetupConfigurationEmployeeComponent } from './pages/office-setup-configuration-employee/office-setup-configuration-employee.component';
import { OfficeSetupConfigurationComponent } from './pages/office-setup-configuration/office-setup-configuration.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TaxChargesComponent } from './pages/tax-charges/tax-charges.component';

const routes: Routes = [
  {path:"",component:HeadofficeSetupComponent},
  {path:"office-management",component:OfficeManagementComponent},
  {path:"fee-charges",component:FeeChargesComponent},
  {path:"tax-charges",component:TaxChargesComponent},
  {path:"setup-configuration",component:OfficeSetupConfigurationComponent},
  {path:"setup-configuration-employee",component:OfficeSetupConfigurationEmployeeComponent},
  {path:"login",component:LoginComponent},
  {
    path:"head-office",
    component:EditHeadofficeSetupComponent,
    children:[
      {path:'',component:EditHeadOfficeInformationComponent,},
      {path:'document',component:EditCompanyDocumentComponent},
      {path:'departments',component:EditDepartmentsComponent},
      {path:'head-of-office',component:EditHeadOfOfficeComponent},
      {path:'banking-details',component:EditBankingDetailsComponent},
    ]
  },
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
