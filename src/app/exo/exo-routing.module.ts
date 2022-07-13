import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';

const routes: Routes = [
  {
    path: '', component: ExoComponent, children : [
      {
        path: 'exo1', component: Exo1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
