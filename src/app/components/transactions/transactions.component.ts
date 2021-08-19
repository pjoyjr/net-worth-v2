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
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction));
    console.log("Added Transaction!");
    console.log(transaction);
  }
  
  toggleEditTransaction(transaction: Transaction){
    this.uiService.setEditToggle();
    this.currEdit = transaction;
  }
  
  toggleCancelTransaction(){
    this.uiService.setEditToggle();
    this.currEdit = undefined;
    console.log("Canceled Editing Transaction!");
  }

  deleteTransaction(transaction: Transaction){
    this.transactionService.deleteTransaction(transaction).subscribe(() => (this.transactions = this.transactions.filter((t) => t.id !== transaction.id))); 
    console.log("Deleted Transaction!");
    console.log(transaction);
  }

  updateTransaction(editedTransaction: Transaction){
    this.transactionService.updateTransaction(editedTransaction).subscribe(
      () => (this.transactions.forEach(transaction => {
      if(transaction.id == editedTransaction.id){
        transaction.description = editedTransaction.description;
        transaction.date = editedTransaction.date;
        transaction.amount = editedTransaction.amount;
      }})
    ));
    console.log("Edited Transaction!");
    console.log(editedTransaction);
    this.uiService.setEditToggle();
  }
}
