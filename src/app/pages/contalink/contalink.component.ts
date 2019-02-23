import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContalinkService } from '../../services/contalink.service';

@Component({
  selector: 'app-contalink',
  templateUrl: './contalink.component.html',
  styleUrls: ['./contalink.component.css'],
  providers: [ContalinkService]
})
export class ContalinkComponent implements OnInit {

  public username: string;
  public password: string;

  @Output() onClick: EventEmitter < any >= new EventEmitter < any > ();

  constructor(public cs: ContalinkService) {

  }

  ngOnInit() {


  }


  public validarContalink() {

    this.cs.login(this.username, this.password).subscribe(user => {

      if (user.id) {

        this.onClick.emit({
          success: true,
          msg: 'Has iniciado sesion de contalink'
        });
      }



    });

  }

}
