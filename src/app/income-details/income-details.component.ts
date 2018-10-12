import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {
  @Input()
  income = {
    monthlyRent: null,
    monthlyRentAI: null,
    otherMonthlyIncome: null,
    otherMonthlyIncomeAI: null,
    vacancyRate: null,
    mgmtFee: null
  };

  constructor() {}

  ngOnInit() {}
}
