import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

	@Output() onClick: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public validarBanco(){

  	this.onClick.emit({
  		success: true
  	});
  	
  }

}
