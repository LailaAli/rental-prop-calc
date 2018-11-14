import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss']
})
export class ResultSummaryComponent implements OnInit {
  encapsulation: ViewEncapsulation.Emulated;

  @Input()
  purchase: any = {};
  @Input()
  income: any = {};
  @Input()
  expenses: any = {};
  @Input()
  sell: any = {};
  @Input()
  isHidden: boolean;

  show = false;
  yr = [];

  yrOne = {
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
    hoaFeeMo: null,
    hoaFeeYr: null,
    maintenanceCostMo: null,
    maintenanceCostYr: null,
    otherCostMo: null,
    otherCostYr: null,
    cashFlowMo: null,
    cashFlowYr: null,
    nOIMo: null,
    nOIYr: null,
    totalExpenses: null
  };

  breakdown: any = [
    {
      yr: 0,
      annualIncome: 5000,
      mortgage: 405,
      expenses: 300,
      cashFlow: 2400,
      cashOnReturn: 5,
      equityAccumulated: 7000,
      cashToReceive: 6700,
      return: 5
    },
    {
      yr: 1,
      annualIncome: 5000,
      mortgage: 405,
      expenses: 300,
      cashFlow: 2400,
      cashOnReturn: 5,
      equityAccumulated: 7000,
      cashToReceive: 6700,
      return: 5
    }
  ];

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

  constructor() {}

  ngOnInit() {}

  //////////////////////
  // Yr One Calculations
  moIncome() {
    this.yrOne.incomeMo = Math.ceil(this.income.monthlyRent);
  }

  yrIncome() {
    this.yrOne.incomeYr = this.yrOne.incomeMo * 12;
  }

  moMortgagePayment() {
    // Subtract Down Payment from Purchase Price
    let newHomePrice;
    newHomePrice = this.purchase.purchasePrice - this.purchase.downPayment;

    // Calculate monthly APR rate
    let moAprRate;
    moAprRate = this.purchase.interestRate / 100 / 12;

    // Calculate total number of mortgage payments
    let numberOfMortgagePayments;
    numberOfMortgagePayments = this.purchase.loanTerm * 12;

    // Calculate interestPayments ^ numberOfMortgagePayments
    let interestPayments;
    interestPayments = Math.pow(1 + moAprRate, numberOfMortgagePayments);

    // Calculate monthlyPayments
    let mortgagePayments;
    mortgagePayments =
      (newHomePrice * (moAprRate * interestPayments)) / (interestPayments - 1);

    let roundedMortPay;
    roundedMortPay =
      Math.round(parseFloat((mortgagePayments * Math.pow(10, 2)).toFixed(2))) /
      Math.pow(10, 2);

    this.yrOne.mortPayMo = Math.ceil(roundedMortPay);
  }

  yrMortgagePayment() {
    let annualMortgagePayment;
    annualMortgagePayment = this.yrOne.mortPayMo * 12;

    let parsedAnnualMortgagePayment;
    parsedAnnualMortgagePayment =
      Math.round(
        parseFloat((annualMortgagePayment * Math.pow(10, 2)).toFixed(2))
      ) / Math.pow(10, 2);

    this.yrOne.mortPayYr = Math.ceil(parsedAnnualMortgagePayment);
  }

  moVacancy() {
    let vacancyMo;
    vacancyMo = (this.income.vacancyRate / this.income.monthlyRent) * 100 * 100;

    this.yrOne.vacancyMo = Math.ceil(vacancyMo);
  }

  yrVacancy() {
    let vacancyYr;
    vacancyYr = this.yrOne.vacancyMo * 12;
    this.yrOne.vacancyYr = vacancyYr;
  }

  moPropertyTax() {
    let propTaxMo;
    propTaxMo = this.expenses.propertyTaxAnnual / 12;
    this.yrOne.propertyTaxMo = Math.ceil(propTaxMo);
  }

  yrPropertyTax() {
    this.yrOne.propertyTaxYr = Math.ceil(this.expenses.propertyTaxAnnual);
  }

  moInsurance() {
    let moInsurance;
    moInsurance = this.expenses.totalInsuranceAnnual / 12;
    this.yrOne.totalInsuranceMo = Math.ceil(moInsurance);
  }

  yrInsurance() {
    this.yrOne.totalInsuranceYr = Math.ceil(this.expenses.totalInsuranceAnnual);
  }

  moHoaFee() {
    let hoa;
    hoa = this.expenses.hoaFeeAnnual / 12;
    this.yrOne.hoaFeeMo = Math.ceil(hoa);
  }

  yrHoaFee() {
    this.yrOne.hoaFeeYr = Math.ceil(this.expenses.hoaFeeAnnual);
  }

  moMaintenanceCost() {
    let moMaintenanceCost;
    moMaintenanceCost = this.expenses.maintenanceAnnual / 12;
    this.yrOne.maintenanceCostMo = Math.ceil(moMaintenanceCost);
  }

  yrMaintenanceCost() {
    this.yrOne.maintenanceCostYr = Math.ceil(this.expenses.maintenanceAnnual);
  }

  moOtherCost() {
    let moOtherCost;
    moOtherCost = this.expenses.otherCostAnnual / 12;
    this.yrOne.otherCostMo = Math.ceil(moOtherCost);
  }

  yrOtherCost() {
    this.yrOne.otherCostYr = Math.ceil(this.expenses.otherCostAnnual);
  }

  moCashFlow() {
    let moCashFlow;
    moCashFlow =
      this.yrOne.incomeMo -
      this.yrOne.mortPayMo -
      this.yrOne.vacancyMo -
      this.yrOne.propertyTaxMo -
      this.yrOne.totalInsuranceMo -
      this.yrOne.hoaFeeMo -
      this.yrOne.maintenanceCostMo -
      this.yrOne.otherCostMo;

    this.yrOne.cashFlowMo = moCashFlow;
  }

  yrCashFlow() {
    let cashFlowYr;
    cashFlowYr = this.yrOne.cashFlowMo * 12;
    this.yrOne.cashFlowYr = cashFlowYr;
  }

  moNoi() {
    this.yrOne.totalExpenses =
      Math.ceil(this.yrOne.vacancyMo) +
      Math.ceil(this.yrOne.propertyTaxMo) +
      Math.ceil(this.yrOne.totalInsuranceMo) +
      Math.ceil(this.yrOne.hoaFeeMo) +
      Math.ceil(this.yrOne.maintenanceCostMo) +
      Math.ceil(this.yrOne.otherCostMo);

    let nOIMo;
    nOIMo = this.yrOne.incomeMo - this.yrOne.totalExpenses;

    this.yrOne.nOIMo = nOIMo;
  }

  yrNoi() {
    let nOIMo;
    nOIMo = this.yrOne.nOIMo * 12;

    this.yrOne.nOIYr = nOIMo;
  }
  ////////////////////////////////
  // Yearly Breakdown Calculations

  // for loop over years
  years() {
    for (let i = 0; i <= this.sell.holdingLength; i++) {
      this.yr.push(i);
    }
    console.log(this.yr);
    console.log(this.yr[0]);
  }

  annualIncome() {
    // Monthly vacancy cost
    let vacancyMo;
    vacancyMo = (this.income.vacancyRate / this.income.monthlyRent) * 100 * 100;
    console.log(vacancyMo);

    // Monthly income
    let monthlyIncome;
    monthlyIncome = this.income.monthlyRent - vacancyMo;
    console.log(monthlyIncome);

    // Yearly income
    let yearlyIncome;
    yearlyIncome = monthlyIncome * 12;
    console.log(yearlyIncome);

    // Annual Rent Increase
    // Convert annualRentIncrease to percent
    this.income.annualRentIncrease = (
      this.income.annualRentIncrease / 100 +
      1
    ).toFixed(2);
    console.log('income.annualRentIncrease ' + this.income.annualRentIncrease);

    // Yearly Income w/annual increase
    let annualIncomeWIncrease;
    annualIncomeWIncrease = yearlyIncome * this.income.annualRentIncrease;
    console.log('annualIncomeWIncrease ' + annualIncomeWIncrease);

    // for (const breakdown of this.breakdown) {
    //   // annualIncome =  yrlyIncomeWIncrease;
    //   console.log(this.breakdown.annualIncome);
    // }
  }

  //////////////////////////////
  // Holding Length Calculations
  totalMortgagePayments() {
    this.holdingLength.totalMortPayments =
      this.yrOne.mortPayYr * this.sell.holdingLength;
  }

  purchaseCapRate() {
    let capRate;
    capRate = (this.yrOne.nOIYr / this.purchase.purchasePrice) * 100;

    this.holdingLength.purchaseCapRate = parseFloat(capRate).toFixed(2);
  }

  calculate() {
    this.show = true;
    this.isHidden = true;
    // Year One
    this.moIncome();
    this.yrIncome();
    this.moMortgagePayment();
    this.yrMortgagePayment();
    this.moVacancy();
    this.yrVacancy();
    this.moPropertyTax();
    this.yrPropertyTax();
    this.moInsurance();
    this.yrInsurance();
    this.moHoaFee();
    this.yrHoaFee();
    this.moMaintenanceCost();
    this.yrMaintenanceCost();
    this.moOtherCost();
    this.yrOtherCost();
    this.moCashFlow();
    this.yrCashFlow();
    this.moNoi();
    this.yrNoi();

    // Yearly Breakdown
    this.years();
    this.annualIncome();

    // Holding Length
    this.totalMortgagePayments();
    this.purchaseCapRate();
  }
}
