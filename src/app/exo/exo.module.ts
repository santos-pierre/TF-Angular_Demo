import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { ExoComponent } from './exo.component';
import { ToTimePipe } from '../pipes/to-time.pipe';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    ToTimePipe
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
