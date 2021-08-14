import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  isIncome: any | boolean;
  description: any | string;
  day: any | string;
  amount: any | number;

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => this.transactions = transactions);
  }

  onSubmit(){
    if((!this.description || !this.day || !this.amount)){
      alert('Please fill out form!');
      return;
    }

    const newTransaction: Transaction = {
      description: this.description,
      day: this.day,
      amount: this.amount
    };

    this.addTransaction(newTransaction)
    this.description = '';
    this.day = '';
    this.amount = 0;
  }

  addTransaction(transaction: Transaction){
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction));
  }
}
