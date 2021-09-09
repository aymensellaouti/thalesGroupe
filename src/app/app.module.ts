import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { BindingExampleComponent } from './components/binding-example/binding-example.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { CardDetailComponent } from './cv/card-detail/card-detail.component';
import { ItemComponent } from './cv/item/item.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { NgIfTestComponent } from './directives/ng-if-test/ng-if-test.component';
import { UsdBtcPipe } from './pipes/usd-btc.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { Logger } from './services/logger.service';
import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './embauche/components/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { FrontComponent } from './templates/front/front.component';
import { BackComponent } from './templates/back/back.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/form/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestObervableComponent } from './components/test-obervable/test-obervable.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestHttpComponent } from './components/test-http/test-http.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BindingExampleComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    InteractionComponent,
    PereComponent,
    CvComponent,
    ListComponent,
    CardDetailComponent,
    ItemComponent,
    NgStyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    NgIfTestComponent,
    UsdBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailCvComponent,
    FrontComponent,
    BackComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObervableComponent,
    SliderComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
