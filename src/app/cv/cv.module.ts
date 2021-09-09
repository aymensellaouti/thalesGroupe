import { NgModule } from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ItemComponent } from './item/item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EmbaucheComponent } from '../embauche/components/embauche/embauche.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CvRoutingModule } from './cv.routing';

@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    CardDetailComponent,
    ItemComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    AddPersonneComponent,
    DetailCvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CvRoutingModule
  ]
})
export class CvModule {}
