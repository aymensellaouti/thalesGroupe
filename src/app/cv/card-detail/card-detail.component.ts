import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor() {}

  ngOnInit(): void {}
}
