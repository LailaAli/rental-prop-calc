import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yr-one',
  templateUrl: './yr-one.component.html',
  styleUrls: ['./yr-one.component.scss']
})
export class YrOneComponent implements OnInit {
  @Input()
  purchase: any = {};
  @Input()
  income: any = {};
  @Input()
  expenses: any = {};
  @Input()
  sell: any = {};
  @Input() yrOne: any = {};

  constructor() {}

  ngOnInit() {}

}
