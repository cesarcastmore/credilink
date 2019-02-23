import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent implements OnInit {
  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  public rfc: string;


  constructor() {}

  ngOnInit() {}

  public validarRFC() {
    const regex = /[A-Z&Ñ]{3,4}[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[0-9A]/gm;


    console.log(this.rfc);

    if (regex.exec(this.rfc) !== null) {

      this.onClick.emit({
        success: true,
        msg: 'El RFC es correcto'
      });

    } else {
      this.onClick.emit({
        success: false,
        msg: 'El RFC es incorrecto'
      });
    }



  }

}
