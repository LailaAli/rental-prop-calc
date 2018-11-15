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
    totalMoExpenses: null
  };

  breakdown: any = [
    {
      yr: 2,
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
      yr: 3,
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

  //////////////////////////////////
  // YEAR ONE CALCULATIONS //
  /////////////////////////////////

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
    this.expenses.moMortgage = Math.ceil(roundedMortPay);
    console.log('yrOne.mortPayMo ' + this.yrOne.mortPayMo);
    console.log('expenses.moMortgage ' + this.expenses.moMortgage);
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
    this.expenses.annualMortgage = Math.ceil(parsedAnnualMortgagePayment);
    console.log('expenses.annualMortgage ' + this.expenses.annualMortgage);
  }

  moVacancy() {
    this.yrOne.vacancyMo = Math.ceil(
      (this.income.vacancyRate / this.income.monthlyRent) * 100 * 100
    );
  }

  yrVacancy() {
    this.yrOne.vacancyYr = this.yrOne.vacancyMo * 12;
  }

  moPropertyTax() {
    this.yrOne.propertyTaxMo = Math.ceil(this.expenses.propertyTaxAnnual / 12);
  }

  yrPropertyTax() {
    this.yrOne.propertyTaxYr = Math.ceil(this.expenses.propertyTaxAnnual);
  }

  moInsurance() {
    this.yrOne.totalInsuranceMo = Math.ceil(
      this.expenses.totalInsuranceAnnual / 12
    );
  }

  yrInsurance() {
    this.yrOne.totalInsuranceYr = Math.ceil(this.expenses.totalInsuranceAnnual);
  }

  moHoaFee() {
    this.yrOne.hoaFeeMo = Math.ceil(this.expenses.hoaFeeAnnual / 12);
  }

  yrHoaFee() {
    this.yrOne.hoaFeeYr = Math.ceil(this.expenses.hoaFeeAnnual);
  }

  moMaintenanceCost() {
    this.yrOne.maintenanceCostMo = Math.ceil(
      this.expenses.maintenanceAnnual / 12
    );
  }

  yrMaintenanceCost() {
    this.yrOne.maintenanceCostYr = Math.ceil(this.expenses.maintenanceAnnual);
  }

  moOtherCost() {
    this.yrOne.otherCostMo = Math.ceil(this.expenses.otherCostAnnual / 12);
  }

  yrOtherCost() {
    this.yrOne.otherCostYr = Math.ceil(this.expenses.otherCostAnnual);
  }

  moCashFlow() {
    this.yrOne.cashFlowMo =
      this.yrOne.incomeMo -
      this.yrOne.mortPayMo -
      this.yrOne.vacancyMo -
      this.yrOne.propertyTaxMo -
      this.yrOne.totalInsuranceMo -
      this.yrOne.hoaFeeMo -
      this.yrOne.maintenanceCostMo -
      this.yrOne.otherCostMo;
  }

  yrCashFlow() {
    this.yrOne.cashFlowYr = this.yrOne.cashFlowMo * 12;
  }

  moNoi() {
    this.yrOne.totalMoExpenses =
      Math.ceil(this.yrOne.vacancyMo) +
      Math.ceil(this.yrOne.propertyTaxMo) +
      Math.ceil(this.yrOne.totalInsuranceMo) +
      Math.ceil(this.yrOne.hoaFeeMo) +
      Math.ceil(this.yrOne.maintenanceCostMo) +
      Math.ceil(this.yrOne.otherCostMo);
    console.log('yrOne.totalMoExpenses ' + this.yrOne.totalMoExpenses);

    this.yrOne.nOIMo = this.yrOne.incomeMo - this.yrOne.totalMoExpenses;
    console.log('yrOne.nOIMo ' + this.yrOne.nOIMo);
  }

  yrNoi() {
    this.yrOne.nOIYr = this.yrOne.nOIMo * 12;
  }

  //////////////////////////////////
  // YEARLY BREAKDOWN CALCULATIONS //
  /////////////////////////////////

  // for loop over years
  years() {
    for (let i = 2; i <= this.sell.holdingLength; i++) {
      this.yr.push(i);
    }
    console.log(this.yr);
    console.log(this.yr[0]);
  }

  annualIncome() {
    // Monthly vacancy cost
    this.income.vacancyRate =
      (this.income.vacancyRate / this.income.monthlyRent) * 100 * 100;
    console.log('income.vacancyRate ' + this.income.vacancyRate);

    // Effective Monthly income
    this.income.effectiveMonthlyIncome =
      this.income.monthlyRent - this.income.vacancyRate;
    console.log(
      'icome.effectiveMonthlyIncome ' + this.income.effectiveMonthlyIncome
    );

    // Effective Yearly income
    this.income.effectiveAnnualIncome = this.income.effectiveMonthlyIncome * 12;
    console.log(
      'income.effectiveAnnualIncome ' + this.income.effectiveAnnualIncome
    );

    // Annual Rent Increase
    this.income.annualRentIncrease = (
      this.income.annualRentIncrease / 100 +
      1
    ).toFixed(2);
    console.log('income.annualRentIncrease ' + this.income.annualRentIncrease);

    // Annual Income w/annual increase
    this.income.annualIncomeWIncrease =
      this.income.effectiveAnnualIncome * this.income.annualRentIncrease;
    console.log(
      'income.annualIncomeWIncrease ' + this.income.annualIncomeWIncrease
    );
  }

  annualExpenses() {
    // Annual Expenses w/annual increase
    this.expenses.totalAnnualExpensesWIncrease =
      this.expenses.propertyTaxAnnual *
        (this.expenses.propertyTaxAI / 100 + 1) +
      this.expenses.totalInsuranceAnnual *
        (this.expenses.totalInsuranceAI / 100 + 1) +
      this.expenses.hoaFeeAnnual * (this.expenses.hoaFeeAI / 100 + 1) +
      this.expenses.maintenanceAnnual *
        (this.expenses.maintenanceAI / 100 + 1) +
      this.expenses.otherCostAnnual * (this.expenses.otherCostAI / 100 + 1);
    console.log(
      'expenses.totalAnnualExpensesWIncrease ' +
        this.expenses.totalAnnualExpensesWIncrease
    );
  }

  annualCashFlow() {
    // Annual cashflow
    this.income.annualCashflow =
      this.income.annualIncomeWIncrease -
      (this.expenses.annualMortgage +
        this.expenses.totalAnnualExpensesWIncrease);
    console.log(
      'income.annualIncomeWIncrease ' + this.income.annualIncomeWIncrease
    );
    console.log('expenses.annualMortgage ' + this.expenses.annualMortgage);
    console.log(
      'expenses.totalAnnualExpensesWIncrease ' +
        this.expenses.totalAnnualExpensesWIncrease
    );
    console.log('income.annualCashFlow ' + this.income.annualCashflow);
  }

  cashOnCashReturn() {
    // (CashFlow / CashInvested)*100
    this.purchase.cashInvested =
      this.purchase.downPayment +
      this.purchase.closingCost +
      this.purchase.repairCost;
      console.log('cashInvested ' + this.purchase.cashInvested);

    let cashOnCashReturn;
    cashOnCashReturn = (this.income.annualCashflow / this.purchase.cashInvested) * 100;
    console.log(cashOnCashReturn);
    this.income.cashOnCashReturn = parseFloat(cashOnCashReturn).toFixed(2);
    console.log('income.cashOnCashReturn ' + this.income.cashOnCashReturn);
  }

  // for (const breakdown of this.breakdown) {
  //   // annualIncome =  yrlyIncomeWIncrease;
  //   console.log(this.breakdown.annualIncome);
  // }

  //////////////////////////////////
  // HOLDING LENGTH CALCULATIONS //
  /////////////////////////////////

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
    this.annualExpenses();
    this.annualCashFlow();
    this.cashOnCashReturn();

    // Holding Length
    this.totalMortgagePayments();
    this.purchaseCapRate();
  }
}
