import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

	@Output() siguiente: EventEmitter<any>= new EventEmitter<any>(); 

  public formItem: FormGroup = new FormGroup({
    contact_name: new FormControl(),
    company_name: new FormControl(),
    contact_email: new FormControl(),
    rfc: new FormControl(),
    contact_phone: new FormControl(),
    amount_needed: new FormControl(),
    term_needed: new FormControl(),
    referrer_code: new FormControl()

  })


  constructor() {}

  ngOnInit() {}

  public enviar(){
  	console.log("ENVIANDO");

  	this.siguiente.emit({
      next: 2, 
      contact: this.formItem.value
    });

  }

}
