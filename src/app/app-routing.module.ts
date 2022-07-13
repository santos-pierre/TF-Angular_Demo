import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'demos', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'exos', loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
