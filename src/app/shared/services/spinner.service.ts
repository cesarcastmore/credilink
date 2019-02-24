import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

	public is_active: boolean= true;

  constructor() { 

  }
}
