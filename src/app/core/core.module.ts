import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Resolvers } from './resolvers/resolvers';
import { OlympicService } from './services/olympic.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    OlympicService,
    Resolvers
  ]
})
export class CoreModule { }
