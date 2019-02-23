import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contalink',
  templateUrl: './contalink.component.html',
  styleUrls: ['./contalink.component.css']
})
export class ContalinkComponent implements OnInit {
  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  constructor() {}

  ngOnInit() {


  }


  public validarContalink() {
    this.onClick.emit({
      success: true
    });
  }

}
