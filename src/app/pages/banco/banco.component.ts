import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

	@Output() onClick: EventEmitter<any>= new EventEmitter<any>();

  public formBancos: FormGroup;

  public type: string;

  constructor() {
  this.formBancos= new FormGroup({
    numero_cliente: new FormControl(),
    contrasenia: new FormControl()
  }) 
  }

  ngOnInit() {

  }

  public validarBanco(){

  	this.onClick.emit({
  		success: true
  	});
  	
  }

}
