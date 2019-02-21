import { Component, OnInit, Input } from "@angular/core";


interface Alert {
  type: string;
  message: string;
}


@Component({
  selector: "app-alert-component",
  templateUrl: "./alert-component.component.html",
  styleUrls: ["./alert-component.component.css"]
})
export class AlertComponentComponent implements OnInit {
  @Input() typeAlert: string;
  @Input() messageAlert: string;

  staticAlertClosed = false;

  ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 3000);

  }
}
