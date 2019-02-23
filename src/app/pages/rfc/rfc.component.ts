import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent implements OnInit {
  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  constructor() {}

  ngOnInit() {}

  public validarRFC() {
    this.onClick.emit({
      success: true
    });
  }

}
