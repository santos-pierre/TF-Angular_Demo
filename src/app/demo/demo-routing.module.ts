import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemoComponent } from './demo.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { ParamsComponent } from './demo10/params/params.component';
import { Demo11Component } from './demo11/demo11.component';
import { Demo12Component } from './demo12/demo12.component';
import { AuthGuard } from './demo12/auth-guard.guard';
import { Demo13Component } from './demo13/demo13.component';
import { UserComponent } from './demo13/user/user.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      {
        path: 'demo1', component: Demo1Component
      },
      {
        path: 'demo2', component: Demo2Component
      },
      {
        path: 'demo3', component: Demo3Component
      },
      {
        path: 'demo4', component: Demo4Component
      },
      {
        path: 'demo5', component: Demo5Component
      },
      {
        path: 'demo6', component: Demo6Component
      },
      {
        path: 'demo7', component: Demo7Component
      },
      {
        path: 'demo8', component: Demo8Component
      },
      {
        path: 'demo9', component: Demo9Component
      },
      {
        path: 'demo10', component: Demo10Component
      },
      {
        path: 'demo11', component: Demo11Component
      },
      {
        path: 'demo12', canActivate: [AuthGuard], component: Demo12Component
      },
      {
        path: 'demo13', component: Demo13Component
      },
      {
        path: 'demo13/users/:id', component: UserComponent
      },
      {
        path: 'param/:param', component: ParamsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
