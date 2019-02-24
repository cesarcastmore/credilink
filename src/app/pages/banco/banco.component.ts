import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HsbcService } from '../../services/hsbc.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  public formBancos: FormGroup;
  @Input() rfc: string;
  public loading: boolean = false;

  public type: string;

  constructor(private hsbc: HsbcService) {
    this.formBancos = new FormGroup({
      numero_cuenta: new FormControl(),
      contrasenia: new FormControl()
    })
  }

  ngOnInit() {

  }

  public validarBanco() {

    this.loading = true;

    this.hsbc.getTransaciones(this.rfc, this.formBancos.value.numero_cuenta)
      .subscribe(trans => {
        this.loading = false;

        if (trans.errorMessage) {

          this.onClick.emit({
            success: false,
            msg: 'La cuenta es invalida'
          });

        } else {


          this.onClick.emit({
            success: true,
            banco: this.formBancos.value
          });
        }



      })



  }

}
