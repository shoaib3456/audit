import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { AsideComponent } from './components/aside/aside.component';
import { HeadOfficeInformationComponent } from './components/head-office-setup/head-office-information/head-office-information.component';
import { OfficeManagementComponent } from './pages/office-management/office-management.component';
import { FeeChargesComponent } from './pages/fee-charges/fee-charges.component';
import { HeadofficeSetupComponent } from './pages/headoffice-setup/headoffice-setup.component';
import { UploadCompanyDocumentComponent } from './components/head-office-setup/upload-company-document/upload-company-document.component';
import { DepartmentComponent } from './components/head-office-setup/department/department.component';
import { HeadOfOfficeComponent } from './components/head-office-setup/head-of-office/head-of-office.component';
import { BankingDetailComponent } from './components/head-office-setup/banking-detail/banking-detail.component';
import { TaxChargesComponent } from './pages/tax-charges/tax-charges.component';
import { OfficeSetupConfigurationComponent } from './pages/office-setup-configuration/office-setup-configuration.component';
import { OfficeSetupConfigurationEmployeeComponent } from './pages/office-setup-configuration-employee/office-setup-configuration-employee.component';
import { SidebarEditComponent } from './components/sidebar-edit/sidebar-edit.component';
import { EditHeadOfficeInformationComponent } from './pages/edit-head-office-setup/edit-head-office-information/edit-head-office-information.component';
import { EditHeadofficeSetupComponent } from './pages/edit-headoffice-setup/edit-headoffice-setup.component';
import { EditCompanyDocumentComponent } from './pages/edit-head-office-setup/edit-company-document/edit-company-document.component';
import { EditDepartmentsComponent } from './pages/edit-head-office-setup/edit-departments/edit-departments.component';
import { EditHeadOfOfficeComponent } from './pages/edit-head-office-setup/edit-head-of-office/edit-head-of-office.component';
import { EditBankingDetailsComponent } from './pages/edit-head-office-setup/edit-banking-details/edit-banking-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AsideComponent,
    OfficeManagementComponent,
    FeeChargesComponent,
    HeadofficeSetupComponent,
    HeadOfficeInformationComponent,
    UploadCompanyDocumentComponent,
    DepartmentComponent,
    HeadOfOfficeComponent,
    BankingDetailComponent,
    TaxChargesComponent,
    OfficeSetupConfigurationComponent,
    OfficeSetupConfigurationEmployeeComponent,
    SidebarEditComponent,
    EditHeadOfficeInformationComponent,
    EditHeadofficeSetupComponent,
    EditCompanyDocumentComponent,
    EditDepartmentsComponent,
    EditHeadOfOfficeComponent,
    EditBankingDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
