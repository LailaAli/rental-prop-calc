import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  toggled = true;

  constructor() {}

  ngOnInit() {}

  onToggle() {
    console.log(this.toggled);
    this.toggled = !this.toggled;
  }
}
