import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contalink',
  templateUrl: './contalink.component.html',
  styleUrls: ['./contalink.component.css'],
})
export class ContalinkComponent implements OnInit {

  public username: string;
  public password: string;

  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  constructor(public cs: AuthService) {

  }

  ngOnInit() {


  }


  public validarContalink() {

    this.cs.login(this.username, this.password).subscribe(user => {

      if (user.id) {

        this.onClick.emit({
          success: true,
          msg: 'Has iniciado sesion de contalink',
          user: user
        });
      } else {
        this.onClick.emit({
          success: false, 
          msg: user.message
        });
      }



    });

  }

}
