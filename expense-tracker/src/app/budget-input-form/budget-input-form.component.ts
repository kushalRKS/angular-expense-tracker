import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../models/budgetItem.model';
@Component({
  selector: 'app-budget-input-form',
  templateUrl: './budget-input-form.component.html',
  styleUrls: ['./budget-input-form.component.sass'],
})
export class BudgetInputFormComponent implements OnInit {
  constructor() {}

  @Output()
  onFormSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  formData: BudgetItem;

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.onFormSubmit.emit(form.value);
    form.reset();
  }
}
