import { Component, OnInit } from '@angular/core';
import { } from "module";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  userName = "Jan"

  constructor() { }

  ngOnInit(): void {
  }

  getUserName() {
    return this.userName
  }

}
