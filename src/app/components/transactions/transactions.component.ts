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

  @Output() dtOptions: any = {};

  @Output() data = [
    {name: 'Ajay', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ];

  constructor(private transactionService: TransactionService, private uiService: UiService) { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5,10,15],
      processing: true
    };
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

  updateTransaction(){
    console.log("updated entry!");
  }
  
}
