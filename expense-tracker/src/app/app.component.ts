import { Component } from '@angular/core';
import { BudgetItem } from './models/budgetItem.model';
import { financeSummary } from './models/chartData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'expense-tracker';

  budgetItems: Array<BudgetItem> = new Array<BudgetItem>();
  totalBudget: number = 0;

  single: any[];
  view: any[] = [200, 200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#ff555d', '#68e1b6'],
  };

  financeSummary: Array<financeSummary> = [
    {
      value: 0,
      name: 'Earnings',
    },
    {
      value: 0,
      name: 'Expenses',
    },
  ];

  constructor() {}

  getFinanceSummary(items: Array<BudgetItem>) {
    let earning = items
      .filter((item) => item.price >= 0)
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price;
      }, 0);
    let expense = items
      .filter((item) => item.price <= 0)
      .reduce(function (accumulator, currentValue) {
        return accumulator + Math.abs(currentValue.price);
      }, 0);

    console.log(expense);
    this.financeSummary = [
      {
        value: expense,
        name: 'Expenses',
      },
      {
        value: (earning -= expense),
        name: 'Balance',
      },
    ];

    this.financeSummary = [...this.financeSummary];

    console.log();
  }

  onFormSubmit(newItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.price;
    this.getFinanceSummary(this.budgetItems);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.price;
    this.getFinanceSummary(this.budgetItems);
  }
}
