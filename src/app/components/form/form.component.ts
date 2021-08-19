import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() currEdit: any | Transaction = undefined;
  description: any | string = "e.g. Gas Purchase";
  date: any | string;
  amount: any | number = 0.00;
  id: any | number;

  showEditTransaction: boolean = false;
  subscription: any | Subscription;
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditTransaction = value));
  }

  ngOnInit(): void {
    if(this.currEdit != undefined){
      this.fillForm(this.currEdit);
    }
  }

  onSubmit(){
    if((!this.description || !this.date || !this.amount)){
      alert('Please fill out form!');
      return;
    }

    const newTransaction: Transaction = {
      description: this.description,
      date: this.date,
      amount: this.amount
    };
    this.onAdd(newTransaction)
    
    this.description = '';
    this.date = '';
    this.amount = 0;
  }

  onAdd(newTransaction: Transaction){
    this.onAddTransaction.emit(newTransaction);
  }

  onEdit(){
    this.onEditTransaction.emit();
  }

  fillForm(transaction: Transaction){
    this.id = transaction.id;
    this.description = transaction.description;
    this.date = transaction.date;
    this.amount = transaction.amount;
  }

  cancelEdit(){
    this.description = '';
    this.date = '';
    this.amount = 0;
    this.onCancelEdit.emit();
  }
}
