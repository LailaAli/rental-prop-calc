import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {
  @Input()
  expenses = {
    propertyTaxAnnual: null,
    propertyTaxAI: null,
    totalInsuranceAnnual: null,
    totalInsuranceAI: null,
    hoaFeeAnnual: null,
    hoaFeeAI: null,
    maintenanceAnnual: null,
    maintenanceAI: null,
    otherCostAnnual: null,
    otherCostAI: null
  };

  constructor() {}
  ngOnInit() {}
}
