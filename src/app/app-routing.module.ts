import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { Resolvers } from './core/resolvers/resolvers';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { olympics: Resolvers } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
