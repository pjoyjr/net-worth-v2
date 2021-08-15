import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction: any | Transaction;
  showEditTransaction: boolean = false;
  subscription: any | Subscription;
  @Output() onDeleteTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditTransaction = value));
  }

  ngOnInit(): void {
  }

  onDelete(transaction: Transaction) {
    this.onDeleteTransaction.emit(transaction);
   }

   onEdit(transaction: Transaction) {
     this.onEditTransaction.emit(transaction);
   }
}
