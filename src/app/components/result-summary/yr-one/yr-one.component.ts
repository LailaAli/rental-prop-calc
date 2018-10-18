import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';

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
    this.yrOne.incomeYr = this.yrOne.incomeMo(12);
  }
}
