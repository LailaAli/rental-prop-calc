import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {
  @Input()
  isHidden: boolean;
  @Input()
  income;

  constructor() {}

  ngOnInit() {}
}
