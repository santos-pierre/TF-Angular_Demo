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
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { Demo7Component } from './demo7/demo7.component';
import { ChildrenComponent } from './demo7/children/children.component';
import { Demo8Component } from './demo8/demo8.component';


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
    Demo8Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
