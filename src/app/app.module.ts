import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [
            BrowserModule, 
            AppRoutingModule,
            CoreModule,
            PagesModule,
            MatCardModule
          ],
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
