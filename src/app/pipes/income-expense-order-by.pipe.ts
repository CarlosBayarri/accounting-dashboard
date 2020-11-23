import { Pipe, PipeTransform } from '@angular/core';
import { IncomeExpense } from '../models/income-expense.model';

@Pipe({
  name: 'incomeExpenseOrderBy'
})
export class IncomeExpenseOrderByPipe implements PipeTransform {

  transform(items: IncomeExpense[]): IncomeExpense[] {
    return items.sort((a)=> {
      if (a.type === 'income') {
        return -1;
      } else {
        return 1;
      }
    });
  }

}
