import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
