import { Component, OnInit } from '@angular/core';

export type Link = {
  title: string;
  url?: string;
  children?: Link[];
  isVisible?: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  linkList: Link[] = [];

  constructor() { }

  ngOnInit(): void {
    this.linkList = [
      {
        title: 'Home', url: '/'
      },
      {
        title: 'Demos', children: [
          {
            title: 'Demo 1',
            url: '/demos/demo1'
          },
          {
            title: 'Demo 2',
            url: '/demos/demo2'
          },
          {
            title: 'Demo 3',
            url: '/demos/demo3'
          },
          {
            title: 'Demo 4',
            url: '/demos/demo4'
          },
          {
            title: 'Demo 5',
            url: '/demos/demo5'
          },
          {
            title: 'Demo 6',
            url: '/demos/demo6'
          },
          {
            title: 'Demo 7',
            url: '/demos/demo7'
          },
          {
            title: 'Demo 8',
            url: '/demos/demo8'
          },
          {
            title: 'Demo 9',
            url: '/demos/demo9'
          }
        ]
      },
      {
        title: 'Exos', children: [
          {
            title: 'Exo1',
            url: '/exos/exo1'
          },
          {
            title: 'Exo2',
            url: '/exos/exo2'
          }
        ]
      }
    ]
  }

  toggleVisible(index: number) {
    this.linkList[index].isVisible = !this.linkList[index].isVisible;
  }
}