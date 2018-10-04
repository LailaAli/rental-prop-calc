import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';


@Component({
  selector: 'app-mdb-examples',
  templateUrl: './mdb-examples.component.html',
  styleUrls: ['./mdb-examples.component.scss']
})
export class MdbExamplesComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChildren(CollapseComponent)
  collapses: CollapseComponent[];

  ngOnInit() {}

  ngAfterViewInit() {
    this.collapses.forEach((collapse: CollapseComponent) => {
      collapse.show();
    });
  }

}
