import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { BackComponent } from './templates/back/back.component';
import { FrontComponent } from './templates/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: 'back',
    component: BackComponent,
    children: [{ path: 'first', component: FirstComponent }],
  },
  {
    path: 'front',
    component: FrontComponent,
    children: [{ path: 'second', component: SecondComponent }],
  },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent },
      { path: ':id', component: DetailCvComponent },
    ],
  },

  { path: 'todo', component: TodoComponent },
  { path: 'login', component: LoginComponent },
  { path: ':var', component: SecondComponent },
  /*   { path: 'color', component: ColorComponent }, */
  { path: 'color/:favoriteColor', component: ColorComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
