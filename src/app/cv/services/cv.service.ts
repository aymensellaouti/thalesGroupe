import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'as.jpg', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', '', 8547854),
      new Cv(2, 'Godart', 'Quentin', 20, 'Dev', '              ', 1111111),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
