import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { AuthGuardGuard } from '../auth/guards/auth-guard.guard';

const routes: Routes = [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent, canActivate: [AuthGuardGuard] },
      { path: ':id', component: DetailCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
