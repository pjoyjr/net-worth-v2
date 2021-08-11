import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from  '../../Transaction';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  transactions: Transaction[] = [];
  totalTransactions: number = 0;
  totalAmount: number = 10.10;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }



}
