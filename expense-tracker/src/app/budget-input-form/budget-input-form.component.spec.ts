import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInputFormComponent } from './budget-input-form.component';

describe('BudgetInputFormComponent', () => {
  let component: BudgetInputFormComponent;
  let fixture: ComponentFixture<BudgetInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
