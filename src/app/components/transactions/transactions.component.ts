import { Component, OnInit} from '@angular/core';
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

  constructor(private transactionService: TransactionService, private uiService: UiService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => this.transactions = transactions);
  }
  
  addTransaction(transaction: Transaction){
    console.log(transaction);
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction));
  }
  
  toggleEditTransaction(transaction: Transaction){
    this.uiService.toggleAddTransaction();

    this.transactionService.setEditID(transaction.id);
  }

  deleteTransaction(transaction: Transaction){
    this.transactionService.deleteTransaction(transaction).subscribe(() => (this.transactions = this.transactions.filter((t) => t.id !== transaction.id))); 
  }
  
}
