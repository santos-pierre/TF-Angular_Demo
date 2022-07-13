import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { ToFarhenheitPipe } from '../pipes/to-farhenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    ToFarhenheitPipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }