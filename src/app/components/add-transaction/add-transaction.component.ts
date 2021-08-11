import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();
  isIncome: any | boolean;
  description: any | string;
  day: any | string;
  amount: any | number;
  
  showAddTransaction: boolean = false;
  subscription: any | Subscription;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.description || !this.day || !this.amount){
      alert('Please fill out form!');
      return;
    }

    const newTransaction = {
      isIncome: this.isIncome,
      description: this.description,
      day: this.day,
      amount: this.amount
    };

    this.onAddTransaction.emit(newTransaction);
    this.isIncome = true;
    this.description = '';
    this.day = '';
    this.amount = 0;
  }
}
