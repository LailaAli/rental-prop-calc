import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PurchaseDetailsComponent } from '../../purchase-details/purchase-details.component';
import { IncomeDetailsComponent } from '../../income-details/income-details.component';
import { ExpensesDetailsComponent } from '../../expenses-details/expenses-details.component';
import { SellDetailsComponent } from '../../sell-details/sell-details.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() {}

  isHidden: boolean;

  ngOnInit() {}

  displayCounter(count) {
    // expand correct panel
    console.log(count);
  }
}
