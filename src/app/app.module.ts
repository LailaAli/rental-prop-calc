import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';
import { SellDetailsComponent } from './sell-details/sell-details.component';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbExamplesComponent } from './mdb-examples/mdb-examples.component';
import { AccordionComponent } from './common/accordion/accordion.component';
import { PanelComponent } from './common/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseDetailsComponent,
    IncomeDetailsComponent,
    ExpensesDetailsComponent,
    SellDetailsComponent,
    ResultSummaryComponent,
    NavbarComponent,
    MdbExamplesComponent,
    AccordionComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
