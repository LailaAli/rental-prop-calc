import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yr-one',
  templateUrl: './yr-one.component.html',
  styleUrls: ['./yr-one.component.scss']
})
export class YrOneComponent implements OnInit {
  @Input()
  purchase;
  @Input()
  income;
  @Input()
  expenses;
  @Input()
  sell;
  @Input()
  yrOne;

  constructor() {}

  ngOnInit() {}
}
