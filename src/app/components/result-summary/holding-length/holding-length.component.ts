import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holding-length',
  templateUrl: './holding-length.component.html',
  styleUrls: ['./holding-length.component.scss']
})
export class HoldingLengthComponent implements OnInit {
  @Input()
  purchase: any = {};
  @Input()
  income: any = {};
  @Input()
  expenses: any = {};
  @Input()
  sell: any = {};
  @Input()
  holdingLength: any = {};

  constructor() {}

  ngOnInit() {
  }
}
