import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  description: any | string;
  day: any | string;
  amount: any | number;

  showAddTransaction: any | boolean;
  subscription: any | Subscription;
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTransaction = value));
  }

  ngOnInit(): void {
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
    this.onAdd(newTransaction)
    
    this.description = '';
    this.day = '';
    this.amount = 0;
  }

  onAdd(newTransaction: Transaction){
    this.onAddTransaction.emit(newTransaction);
  }

  toggleAddTransaction() {
    this.uiService.toggleAddTransaction();
  }
}