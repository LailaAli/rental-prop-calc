import { Component, OnInit, ViewChild } from '@angular/core';
// import { PurchaseDetailsComponent } from './components/purchase-details/purchase-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHidden = true;

  purchase: any = {
    purchasePrice: null,
    downPayment: null,
    interestRate: null,
    loanTerm: null,
    closingCost: null,
    repairCost: null,
    afterRepairValue: null
  };

  income = {
    monthlyRent: null,
    monthlyRentAI: null,
    otherMonthlyIncome: null,
    otherMonthlyIncomeAI: null,
    vacancyRate: null,
    mgmtFee: null
  };

  expenses = {
    propertyTaxAnnual: 650,
    propertyTaxAI: null,
    totalInsuranceAnnual: null,
    totalInsuranceAI: null,
    hoaFeeAnnual: null,
    hoaFeeAI: null,
    maintenanceAnnual: null,
    maintenanceAI: null,
    otherCostAnnual: null,
    otherCostAI: null
  };

  sell = {
    sellPrice: 149000,
    valueAppreciation: null,
    holdingLength: null,
    costToSell: null
  };

  ngOnInit() {}
}
