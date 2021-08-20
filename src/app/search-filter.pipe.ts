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
      tranaction.description.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
  }

}
