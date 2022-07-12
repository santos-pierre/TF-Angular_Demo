import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
