import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  items: MenuItem[];


  constructor() {
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
  
}

ngOnInit() {}

}
