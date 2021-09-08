import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  { path: '', component: TwoComponent },

  { path: 'cv', component: CvComponent },
  /*   { path: 'cv/add', component: SecondComponent }, */
  { path: 'todo', component: TodoComponent },
  { path: ':var', component: SecondComponent },
  /*   { path: 'color', component: ColorComponent }, */
  { path: 'color/:favoriteColor', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
