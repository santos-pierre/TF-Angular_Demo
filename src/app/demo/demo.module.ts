import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { ToFarhenheitPipe } from '../pipes/to-farhenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { Demo7Component } from './demo7/demo7.component';
import { ChildrenComponent } from './demo7/children/children.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { ParamsComponent } from './demo10/params/params.component';
import { Demo11Component } from './demo11/demo11.component';
import { Demo12Component } from './demo12/demo12.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    ToFarhenheitPipe,
    TemperaturePipe,
    Demo5Component,
    Demo6Component,
    HighlightDirective,
    Demo7Component,
    ChildrenComponent,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    ParamsComponent,
    Demo11Component,
    Demo12Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
