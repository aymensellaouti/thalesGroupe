import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor() { }
  cc() {
    console.log('cc');

  }
}
