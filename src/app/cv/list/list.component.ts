import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'rotating_card_profile3.png', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', 'rotating_card_profile.png', 8547854)
    ];
  }

}
