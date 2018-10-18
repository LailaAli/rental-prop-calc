import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yearly-breakdown',
  templateUrl: './yearly-breakdown.component.html',
  styleUrls: ['./yearly-breakdown.component.scss']
})
export class YearlyBreakdownComponent implements OnInit {
  @Input()
  purchase: any = {};
  @Input()
  income: any = {};
  @Input()
  expenses: any = {};
  @Input()
  sell: any = {};

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

  constructor() { }

  ngOnInit() {
  }

}
