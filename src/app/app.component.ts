import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHidden = true;

  purchase: any = {
    purchasePrice: 100000,
    downPayment: 20000,
    interestRate: 4.5,
    loanTerm: 30,
    closingCost: 2000,
    repairCost: 2000,
    afterRepairValue: 120000
  };

  income = {
    monthlyRent: 1000,
    monthlyRentAI: 3,
    otherMonthlyIncome: null,
    otherMonthlyIncomeAI: 3,
    vacancyRate: 5,
    mgmtFee: 8
  };

  expenses = {
    propertyTaxAnnual: 1500,
    propertyTaxAI: 3,
    totalInsuranceAnnual: 800,
    totalInsuranceAI: 3,
    hoaFeeAnnual: 1200,
    hoaFeeAI: 3,
    maintenanceAnnual: 1000,
    maintenanceAI: 3,
    otherCostAnnual: 200,
    otherCostAI: 3
  };

  sell = {
    sellPrice: 200000,
    valueAppreciation: 3,
    holdingLength: 20,
    costToSell: 8
  };

  ngOnInit() {}
}
