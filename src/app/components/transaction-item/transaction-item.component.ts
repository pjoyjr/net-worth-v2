import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction: any | Transaction;
  @Output() onDeleteTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(transaction: Transaction) {
    this.onDeleteTransaction.emit(transaction);
   }

   onEdit(transaction: Transaction) {
     this.onEditTransaction.emit(transaction);
   }
}
