import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :', changes);
  }
  @Input() cv: Cv = null;
  ngOnInit(): void {}
}
