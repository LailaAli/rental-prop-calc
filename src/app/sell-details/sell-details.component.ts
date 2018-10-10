import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sell-details',
  templateUrl: './sell-details.component.html',
  styleUrls: ['./sell-details.component.scss']
})
export class SellDetailsComponent implements OnInit {
  @Input()
  isHidden = false;
  constructor() {}

  ngOnInit() {}
}
