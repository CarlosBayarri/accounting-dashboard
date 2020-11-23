import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducers';
import * as auth from './auth/auth.reducers';
import * as incomeExpense from './income-expense/income-expense.reducers';

export interface AppState {
   ui: ui.State,
   user: auth.State,
   incomeExpense: incomeExpense.State
}



export const appReducers: ActionReducerMap<AppState> = {
   ui: ui.uiReducer,
   user: auth.authReducer,
   incomeExpense: incomeExpense.incomeExpenseReducer
}