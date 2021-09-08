import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
      this.cv = this.cvService.findCvById(+params.id);
      if (!this.cv) {
        this.router.navigate(['/cv']);
      }
    }
    );
  }
  deletePersonne() {
    if (this.cvService.deleteCv(this.cv)) {
      this.toastr.success(
        `Le cv de ${this.cv.name} a été supprimé avec succès`
      );
      this.router.navigate(['cv']);
    }
  }
}
