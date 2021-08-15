import { Component, OnInit} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from  '../../Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  currEditID: any | number;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => this.transactions = transactions);
  }
  
  addTransaction(transaction: Transaction){
    console.log(transaction);
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction));
  }
  
  editTransaction(transaction: Transaction){
    this.currEditID = transaction.id;  
    console.log(this.currEditID);
  }

  deleteTransaction(transaction: Transaction){
    this.transactionService.deleteTransaction(transaction).subscribe(() => (this.transactions = this.transactions.filter((t) => t.id !== transaction.id))); 
  }
}
