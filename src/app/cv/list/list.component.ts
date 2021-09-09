import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  /*   @Output() forwardSelectedCv = new EventEmitter(); */
  constructor(private cvService: CvService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs) => (this.cvs = cvs),
      (erreur) => {
        this.toastr.warning(
          `Les données sont fake. Problème d'accès au serveur, veuillez contacter l'admin`
        );
        this.cvs = this.cvService.getFakeCvs()
      }
    );
  }

  /*   forwardCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  } */
}
