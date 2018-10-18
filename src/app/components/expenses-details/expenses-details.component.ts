import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {
  @Input() expenses: any = {};


  constructor() {}
  ngOnInit() {}
}
