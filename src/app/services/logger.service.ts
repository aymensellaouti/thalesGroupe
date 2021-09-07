import { Injectable } from '@angular/core';
import { FakeService } from './fake.service';
@Injectable()
export class Logger {
  constructor(private fakeService: FakeService) {}
  logger(message: any) {
    console.log('Log from LoggerService', message);
    this.fakeService.cc();
  }
}
