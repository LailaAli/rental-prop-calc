import {
  Component,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core';
import { ToggleSwitchComponent } from '../common/toggle-switch/toggle-switch.component';


@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  @Input()
  isHidden = false;

  @ViewChild(ToggleSwitchComponent) toggled: boolean;

  @Input()
  purchase = {
    purchasePrice: null,
    downPayment: null,
    interestRate: null,
    loanTerm: null,
    closingCost: null,
    repairCost: null,
    afterRepairValue: null
  };

  ngOnInit() {}
}
