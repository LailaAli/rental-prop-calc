import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent {

  title = 'this is title';
  justViewed: boolean;
  isHidden = false;
}
