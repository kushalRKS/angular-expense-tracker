import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

import { BudgetItem } from '../models/budgetItem.model';
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.sass'],
})
export class BudgetListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input()
  items: Array<BudgetItem> = [];

  @Output()
  selectedItem: EventEmitter<any> = new EventEmitter();
  @Output()
  deleteItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  onItemSelect(item: BudgetItem) {
    this.selectedItem.emit(item);
  }
  onItemRemove(item: BudgetItem) {
    this.deleteItem.emit(item);
  }
}
