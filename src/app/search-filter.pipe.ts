import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './Transaction';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(transactions: Transaction[], searchWord: String): Transaction[] {
    if(!transactions || !searchWord){
      return transactions;
    }
    return transactions.filter(tranaction =>
      tranaction.id?.toString().toLocaleLowerCase().includes(searchWord.toString().toLocaleLowerCase()) ||
      tranaction.description.toString().toLocaleLowerCase().includes(searchWord.toString().toLocaleLowerCase()) ||
      tranaction.date.toString().toLocaleLowerCase().includes(searchWord.toString().toLocaleLowerCase()) ||
      tranaction.amount.toString().toLocaleLowerCase().includes(searchWord.toString().toLocaleLowerCase()));
  }

}
