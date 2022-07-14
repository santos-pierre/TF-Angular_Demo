import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { ExoComponent } from './exo.component';
import { ToTimePipe } from '../pipes/to-time.pipe';
import { Exo2Component } from './exo2/exo2.component';
import { ListComponent } from './exo2/list/list.component';
import { ListItemComponent } from './exo2/list/list-item/list-item.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    ToTimePipe,
    Exo2Component,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
