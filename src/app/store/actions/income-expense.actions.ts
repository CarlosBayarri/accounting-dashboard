import { createAction, props } from '@ngrx/store';
import { IncomeExpense } from '../../models/income-expense.model';

export const setItems = createAction('[IE] setItems', props<{items: IncomeExpense[]}>());
export const unSetItems = createAction('[IE] UnSetItems');