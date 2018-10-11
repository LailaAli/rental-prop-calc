import { Component, OnInit, EventEmitter, Output, Input, } from '@angular/core';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  // @Output() valueChange = new EventEmitter();
  // counter = 0;

  // valueChanged() { // You can give any function name
  //     this.counter = this.counter + 1;
  //     this.valueChange.emit(this.counter);
  // }

  @Input() isHidden = false;

  ngOnInit() {}


}
