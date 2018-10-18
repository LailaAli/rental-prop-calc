import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-yr-one',
  templateUrl: './yr-one.component.html',
  styleUrls: ['./yr-one.component.scss']
})
export class YrOneComponent implements OnInit, OnChanges {
  @Input()
  purchase: any = {};
  @Input()
  income: any = {};
  @Input()
  expenses: any = {};
  @Input()
  sell: any = {};

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
    maintenanceCostMo: null,
    maintenanceCostYr: null,
    otherCostMo: null,
    otherCostYr: null,
    cashFlowMo: null,
    cashFlowYr: null,
    nOIMo: null,
    nOIYr: null
  };
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));
    this.moIncome();
    this.yrIncome();
  }

  moIncome() {
    this.yrOne.incomeMo = this.income.monthlyRent;
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

    this.yrOne.mortPayMo =
      Math.round(parseFloat((mortgagePayments * Math.pow(10, 2)).toFixed(2))) /
      Math.pow(10, 2);
  }

  yrMortgagePayment() {
    let annualMortgagePayment;
    annualMortgagePayment = this.yrOne.mortPayMo * 12;

    let parsedAnnualMortgagePayment;
    parsedAnnualMortgagePayment =
      Math.round(
        parseFloat((annualMortgagePayment * Math.pow(10, 2)).toFixed(2))
      ) / Math.pow(10, 2);

      this.yrOne.mortPayYr = parsedAnnualMortgagePayment;
  }

  calculate() {
    this.moIncome();
    this.yrIncome();
    this.moMortgagePayment();
    this.yrMortgagePayment();
  }
}
