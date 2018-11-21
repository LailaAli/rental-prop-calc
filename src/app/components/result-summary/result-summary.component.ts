import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss']
})
export class ResultSummaryComponent implements OnInit {
  encapsulation: ViewEncapsulation.Emulated;

  @Input()
  purchase;
  @Input()
  income;
  @Input()
  expenses;
  @Input()
  sell;
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
    totalMoExpensesWVacancy: null,
    totalAnnualExpenses: null
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
  ];

  breakdownYrOne: any = {
    yr: 1,
    annualIncome: null,
    mortgage: null,
    expenses: null,
    cashFlow: null,
    cashOnReturn: null,
    equityAccumulated: null,
    cashToReceive: null,
    return: null
  };

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
    console.log('yrOne.vacancyMo ' + this.yrOne.vacancyMo);
    console.log('income.vacancyRate ' + this.income.vacancyRate);
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
    this.yrOne.totalMoExpensesWVacancy =
      Math.ceil(this.yrOne.vacancyMo) +
      Math.ceil(this.yrOne.propertyTaxMo) +
      Math.ceil(this.yrOne.totalInsuranceMo) +
      Math.ceil(this.yrOne.hoaFeeMo) +
      Math.ceil(this.yrOne.maintenanceCostMo) +
      Math.ceil(this.yrOne.otherCostMo);
    console.log(
      'yrOne.totalMoExpensesWVacancy ' + this.yrOne.totalMoExpensesWVacancy
    );

    this.yrOne.nOIMo = this.yrOne.incomeMo - this.yrOne.totalMoExpensesWVacancy;
    console.log('yrOne.nOIMo ' + this.yrOne.nOIMo);
  }

  yrNoi() {
    this.yrOne.nOIYr = this.yrOne.nOIMo * 12;
  }

  annualExpenses() {
    this.yrOne.totalAnnualExpenses =
      this.expenses.propertyTaxAnnual +
      this.expenses.totalInsuranceAnnual +
      this.expenses.hoaFeeAnnual +
      this.expenses.maintenanceAnnual +
      this.expenses.otherCostAnnual;
    console.log(this.yrOne.totalAnnualExpenses);
  }

  //////////////////////////////////
  // YEARLY BREAKDOWN CALCULATIONS //
  /////////////////////////////////

  // for loop over years
  years() {
    for (let i = 2; i <= this.sell.holdingLength; i++) {
      this.breakdown.forEach(element => {
        element.yr = [i];
      });

      this.yr.push(i);
    }
    console.log(this.yr);
  }

  annualIncome() {
    // Monthly vacancy cost
    this.expenses.vacancyCost =
      (this.income.vacancyRate / this.income.monthlyRent) * 100 * 100;
    console.log('expenses.vacancyCost ' + this.expenses.vacancyCost);

    // Effective Monthly income
    this.income.effectiveMonthlyIncome =
      this.income.monthlyRent - this.expenses.vacancyCost;
    console.log(
      'icome.effectiveMonthlyIncome ' + this.income.effectiveMonthlyIncome
    );

    // Effective Yearly income
    this.income.effectiveAnnualIncome = this.income.effectiveMonthlyIncome * 12;
    console.log(
      'income.effectiveAnnualIncome ' + this.income.effectiveAnnualIncome
    );

    // Annual Rent Increase
    let annualRentIncreaseConverted;
    annualRentIncreaseConverted = (
      this.income.annualRentIncrease / 100 +
      1
    ).toFixed(2);
    console.log(
      'income.annualRentIncreaseConverted ' + annualRentIncreaseConverted
    );

    // Annual Income w/annual increase
    this.income.annualIncomeWIncrease =
      this.income.effectiveAnnualIncome * annualRentIncreaseConverted;
    console.log(
      'income.annualIncomeWIncrease ' + this.income.annualIncomeWIncrease
    );

    this.breakdown.forEach(element => {
      element.annualIncome = this.income.annualIncomeWIncrease;
    });
    // Increase by using ^power ?
  }

  annualExpensesWIncrease() {
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
    cashOnCashReturn =
      (this.income.annualCashflow / this.purchase.cashInvested) * 100;
    this.income.cashOnCashReturn = parseFloat(cashOnCashReturn).toFixed(2);
    console.log('income.cashOnCashReturn ' + this.income.cashOnCashReturn);
  }

  equityAccumulated() {
    //
  }

  cashToReceive() {
    //
  }

  breakdownReturn() {
    //
  }

  // for (const breakdown of this.breakdown) {
  //   // annualIncome =  yrlyIncomeWIncrease;
  //   console.log(this.breakdown.annualIncome);
  // }

  /////////////////////////////////////////////
  // YEARLY BREAKDOWN CALCULATIONS: FIRST YEAR //   /////////////////////////////////////////////

  y1BreakdownAnnualIncome() {
    this.breakdownYrOne.annualIncome = this.income.effectiveAnnualIncome;
  }

  y1BreakdownAnnualMortgage() {
    this.breakdownYrOne.mortgage = this.yrOne.mortPayYr;
  }

  y1BreakdownExpenses() {
    this.breakdownYrOne.expenses = this.yrOne.totalAnnualExpenses;
    console.log('breakdownYrone.expenses ' + this.breakdownYrOne.expenses);
  }

  y1BreakdownCashFlow() {
    // cashFlow = income - expenses - mortgage
    this.breakdownYrOne.cashFlow =
      this.income.effectiveAnnualIncome -
      this.yrOne.totalAnnualExpenses -
      this.yrOne.mortPayYr;
    console.log('breakdownYrOne.cashFlow ' + this.breakdownYrOne.cashFlow);
  }

  y1BreakdownCashonCashReturn() {
    // (cashFlow / cash Invested) * 100
    let cashOnReturn;
    cashOnReturn =
      (this.breakdownYrOne.cashFlow / this.purchase.cashInvested) * 100;

    this.breakdownYrOne.cashOnReturn = parseFloat(cashOnReturn).toFixed(2);
    console.log(
      'breakdownYrOne.cashOnReturn ' + this.breakdownYrOne.cashOnReturn
    );
  }

  y1BreakdownEquityAccumulated() {
    //
  }

  y1BreakdownCashToReceive() {
    //
  }

  y1BreakdownReturn() {
    //
  }

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
    this.annualExpenses();

    // Yearly Breakdown
    this.years();
    this.annualIncome();
    this.annualExpensesWIncrease();
    this.annualCashFlow();
    this.cashOnCashReturn();
    this.equityAccumulated();
    this.cashToReceive();
    this.breakdownReturn();

    // Breakdown Year One
    this.y1BreakdownAnnualIncome();
    this.y1BreakdownAnnualMortgage();
    this.y1BreakdownExpenses();
    this.y1BreakdownCashFlow();
    this.y1BreakdownCashonCashReturn();
    this.y1BreakdownEquityAccumulated();
    this.y1BreakdownCashToReceive();
    this.y1BreakdownReturn();

    // Holding Length
    this.totalMortgagePayments();
    this.purchaseCapRate();

    // Console logs
    console.log('expenses.vacancyCost ' + this.expenses.vacancyCost);
  }
}
