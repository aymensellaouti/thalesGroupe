import { Injectable } from '@angular/core';
import { FakeService } from './fake.service';
@Injectable({
  providedIn: 'root',
})
export class Logger {
  constructor(private fakeService: FakeService) {}
  logger(message: any) {
    console.log('Log from LoggerService', message);
    this.fakeService.cc();
  }
}
