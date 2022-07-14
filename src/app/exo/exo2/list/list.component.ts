import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() liste: string[] = [];

  @Output() removeListItem: EventEmitter<number>

  constructor() {
    this.removeListItem = new EventEmitter()
  }

  ngOnInit(): void {
  }

  removeItem(index: number) {
    this.removeListItem.emit(index);
  }

}
