import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
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
  

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {

    if(form.value.description.startsWith(' ')) return

    this.onFormSubmit.emit(form.value);
    form.reset();
  }
}
