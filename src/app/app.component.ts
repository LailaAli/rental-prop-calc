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
    closingCost: 3000,
    repairCost: 10000,
    afterRepairValue: 150000,
    cashInvested: null,
  };

  income = {
    monthlyRent: 1000,
    annualRentIncrease: 3,
    otherMonthlyIncome: 0,
    otherMonthlyIncomeAI: 3,
    vacancyRate: 5,
    mgmtFee: 0,
    effectiveMonthlyIncome: null,
    effectiveAnnualIncome: null,
    annualIncomeWIncrease: null,
    annualCashFlow: null,
    cashOnCashReturn: null,
  };

  expenses = {
    propertyTaxAnnual: 1500,
    propertyTaxAI: 3,
    totalInsuranceAnnual: 800,
    totalInsuranceAI: 3,
    hoaFeeAnnual: 0,
    hoaFeeAI: 3,
    maintenanceAnnual: 1000,
    maintenanceAI: 3,
    otherCostAnnual: 200,
    otherCostAI: 3,
    vacancyCost: null,
    moMortgage: null,
    annualMortgage: null,
    totalAnnualExpenses: null,
    totalAnnualExpensesWIncrease: null,
  };

  sell = {
    sellPrice: 200000,
    valueAppreciation: 3,
    holdingLength: 20,
    costToSell: 8
  };

  ngOnInit() {}
}
