import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BudgetItem } from '../models/budgetItem.model';
@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.sass'],
})
export class BudgetItemComponent {
  constructor() {}

  @Input()
  item: BudgetItem;

  @Output()
  onItemSelect: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output()
  onItemRemove: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  selectItem(event: MouseEvent, item: BudgetItem) {
    event.stopPropagation();
    this.onItemSelect.emit(item);
  }

  deleteItem(event: MouseEvent, item: BudgetItem) {
    event.stopPropagation();
    this.onItemRemove.emit(item);
  }
}
