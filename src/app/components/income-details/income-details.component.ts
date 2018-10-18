import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {
  @Input()
  income: any = {};

  constructor() {}

  ngOnInit() {
  }

  moRentUpdatedValue (event) {
    console.log (this.income.monthlyRent);
    this.income.monthlyRent = event;
  }
}
