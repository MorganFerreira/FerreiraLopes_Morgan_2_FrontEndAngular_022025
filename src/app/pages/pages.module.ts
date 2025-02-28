import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../landing-page/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    DetailViewComponent
  ]
})
export class PagesModule { }
