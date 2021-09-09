import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {}
  addCv(cv: Cv): void {
    this.cvService.addCv(cv).subscribe(
      (cv) => {
        this.toster.success(
          `Le cv de ${cv.firstname} ${cv.name} a été ajoté avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur: HttpErrorResponse) => {
        this.toster.error(erreur.message);
      }
    );
  }
}
