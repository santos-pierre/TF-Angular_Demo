import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: string = '';
  @Input() index :number = 0;

  @Output() deleteItem: EventEmitter<number>;

  constructor() {
    this.deleteItem = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  remove() {
    this.deleteItem.emit(this.index);
  }

}
