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
  @Input() description: any | string;
  @Input() day: any | string;
  @Input() amount: any | number;

  showEditTransaction: boolean = false;
  subscription: any | Subscription;
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditTransaction = value));
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

  cancelEdit(){
    this.description = '';
    this.day = '';
    this.amount = 0;
    this.uiService.toggleEditTransaction();
  }
}