import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private loggerService: Logger) {}
  sayHello() {
    this.loggerService.logger('Hello :D');
  }
}
