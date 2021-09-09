import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cv } from '../model/cv.model';
import { APIS } from '../../utils/api';
import { DeleteDto } from '../dto/delete.dto';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  selectCvSubject = new Subject<Cv>();
  /*   subscribe(next, error, complete) {
    this.selectCvSubject.subscribe(next, error, complete);
  } */
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'as.jpg', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', '', 8547854),
      new Cv(3, 'Godart', 'Quentin', 20, 'Dev', '              ', 1111111),
    ];
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }
  findFakeCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === id);
  }
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APIS.cv + id);
  }
  deleteCv(id: number): Observable<DeleteDto> {

    return this.http.delete<DeleteDto>(APIS.cv + id);
  }
  addCv(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(APIS.cv, CvService);
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) return false;
    this.cvs.splice(index, 1);
    return true;
  }
  selectCvItem(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }
}

/*
Composant login : récupérer le token et le sauvegarder dans le ocalstorage
Le service login
Teminer la partie ajout et suppression en y ajoutant votre token
*/
