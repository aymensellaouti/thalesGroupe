import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../../embauche/services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit, OnChanges {
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private router: Router,
    private cvService: CvService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :', changes);
  }
  cv: Cv = null;
  ngOnInit(): void {
    this.cvService.selectCvSubject
    .pipe(
      distinctUntilChanged()
    )
    .subscribe((newCv) => (this.cv = newCv));
  }
  embaucher(): void {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toastr.success(
        `Le cv de ${this.cv.firstname} ${this.cv.name} a été préselectionné`
      );
    } else {
      this.toastr.warning(
        `${this.cv.firstname} ${this.cv.name} est déjà préselectionné`
      );
    }
  }
  detailsCv() {
    this.router.navigate(['/cv', this.cv.id]);
  }
}
