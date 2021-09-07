import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Output() sendSelectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectCv() {
    this.sendSelectedCv.emit(this.cv);
  }
}
