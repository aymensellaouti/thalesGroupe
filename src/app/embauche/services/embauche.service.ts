import { Injectable } from '@angular/core';
import { Cv } from '../../cv/model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() { }
  getEmbauchees(): Cv[] {
    return this.embauchees;
  }
  embaucher(cv: Cv): boolean {
    const index = this.embauchees.indexOf(cv);
    if (index === -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
