import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss']
})
export class ResultSummaryComponent implements OnInit {

  vacancyRate = null;
  sell: {};


  holdingLength = {
    irr: null,
    totalProfitWhenSold: null,
    cashOnReturn: null,
    purchaseCapRate: null,
    totalRentalIncome: null,
    totalMortPayments: null,
    totalExpenses: null,
    totalNOI: null
  };

  firstYr = {
    incomeMo: null,
    incomeYr: null,
    mortPayMo: null,
    mortPayYr: null,
    vacancyMo: null,
    vacancyYr: null,
    propertyTaxMo: null,
    propertyTaxYr: null,
    totalInsuranceMo: null,
    totalInsuranceYr: null,
    maintenanceCostMo: null,
    maintenanceCostYr: null,
    otherCostMo: null,
    otherCostYr: null,
    cashFlowMo: null,
    cashFlowYr: null,
    nOIMo: null,
    nOIYr: null
  };

  breakdown = {
    year: 1,
    annualIncome: null,
    mortgage: null,
    expenses: null,
    cashFlow: null,
    cashOnReturn: null,
    equityAccumulated: null,
    cashToReceive: null,
    return: null
  };

  constructor() {}

  ngOnInit() {}

  getReturn () {
    console.log('return');
  }

}
