import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'credenciales-sat',
  templateUrl: './credenciales-sat.component.html',
  styleUrls: ['./credenciales-sat.component.css']
})
export class CredencialesSatComponent implements OnInit {
  @Output() siguiente: EventEmitter < any >= new EventEmitter < any > ();
  @Input() contact: any;


  public formItem: FormGroup = new FormGroup({
    rfc: new FormControl(),
    password_sat: new FormControl(),

  })

  constructor() {

  }

  ngOnInit() {

  	this.formItem.patchValue({
  		rfc: this.contact.rfc
  	})

  	

  }

  public enviar() {

    this.siguiente.emit({
      next: 3,
      sat: this.formItem.value
    });

  }

}
