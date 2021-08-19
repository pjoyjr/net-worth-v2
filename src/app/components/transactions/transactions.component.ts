import { Component, OnInit, Output} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from  '../../Transaction';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  currEdit: any | Transaction;


  constructor(private transactionService: TransactionService, private uiService: UiService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => this.transactions = transactions);
  }
  
  addTransaction(transaction: Transaction){
    console.log(transaction);
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction));
  }
  
  toggleEditTransaction(transaction: Transaction){
    this.uiService.setEditToggle(true);
    this.currEdit = transaction;
  }
  
  toggleCancelTransaction(){
    this.uiService.setEditToggle(false);
    this.currEdit = undefined;
  }

  deleteTransaction(transaction: Transaction){
    this.transactionService.deleteTransaction(transaction).subscribe(() => (this.transactions = this.transactions.filter((t) => t.id !== transaction.id))); 
  }

  updateTransaction(editedTransaction: Transaction){
    this.uiService.setEditToggle(false);
    console.log(editedTransaction);
    this.transactionService.updateTransaction(editedTransaction).subscribe(() => (
    this.transactions.forEach(transaction => {
      if(transaction.id == editedTransaction.id){
        transaction.description = editedTransaction.description;
        transaction.date = editedTransaction.date;
        transaction.amount = editedTransaction.amount;
      }  
    })));
  }
  
}
