import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Common Components
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TabModule } from 'angular-tabs-component';
import { AccordionComponent } from './components/common/accordion/accordion.component';
import { PanelComponent } from './components/common/panel/panel.component';
import { ToggleSwitchComponent } from './components/common/toggle-switch/toggle-switch.component';
import { MdbExamplesComponent } from './components/mdb-examples/mdb-examples.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

// View Components
import { AppComponent } from './app.component';
import { PurchaseDetailsComponent } from './components/purchase-details/purchase-details.component';
import { IncomeDetailsComponent } from './components/income-details/income-details.component';
import { ExpensesDetailsComponent } from './components/expenses-details/expenses-details.component';
import { SellDetailsComponent } from './components/sell-details/sell-details.component';
import { ResultSummaryComponent } from './components/result-summary/result-summary.component';
import { HoldingLengthComponent } from './components/result-summary/holding-length/holding-length.component';
import { YrOneComponent } from './components/result-summary/yr-one/yr-one.component';
import { YearlyBreakdownComponent } from './components/result-summary/yearly-breakdown/yearly-breakdown.component';

// Services
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    PanelComponent,
    PurchaseDetailsComponent,
    IncomeDetailsComponent,
    ExpensesDetailsComponent,
    SellDetailsComponent,
    ResultSummaryComponent,
    NavbarComponent,
    MdbExamplesComponent,
    ToggleSwitchComponent,
    HoldingLengthComponent,
    YrOneComponent,
    YearlyBreakdownComponent
  ],
  imports: [
    TabModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
