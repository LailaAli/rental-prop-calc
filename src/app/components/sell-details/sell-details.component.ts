import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.scss']
})
export class SellDetailsComponent implements OnInit {
  @Input()
  isHidden = false;

  @Input()
  sell = {
    sellPrice: null,
    valueAppreciation: null,
    holdingLength: null,
    costToSell: null
  };

  defaultChecked = false;

  constructor() {}

  ngOnInit() {}
}