import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holding-length',
  templateUrl: './holding-length.component.html',
  styleUrls: ['./holding-length.component.scss']
})
export class HoldingLengthComponent implements OnInit {
  @Input()
  purchase;
  @Input()
  income;
  @Input()
  expenses;
  @Input()
  sell;
  @Input()
  holdingLength;

  constructor() {}

  ngOnInit() {
  }
}
