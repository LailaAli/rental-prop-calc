import { Component, OnInit, Input } from '@angular/core';
import { YrOneComponent } from '../yr-one/yr-one.component';

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
  @Input()
  yrOne: any = {};
  @Input()
  breakdown: any = [];

  headElements = [
    'Yr',
    'Annual Income',
    'Mortgage',
    'Expenses',
    'Cash Flow',
    'Cash on Cash Return',
    'Equity Accumulated',
    'Cash to Receive',
    'Return (IRR)'
  ];

  constructor() {}

  ngOnInit() {}
}
