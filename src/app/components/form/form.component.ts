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
  editDescription: any | string;
  editDate: any | string;
  editAmount: any | number;

  showEditTransaction: boolean = false;
  subscription: any | Subscription;
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditTransaction = value));
  }

  ngOnInit(): void {
  }

  //modify to check if edit or new for first if statement to reuse function
  onSubmit(){
    if(this.showEditTransaction != true){
      if(!this.description || !this.date || !this.amount){
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

    }else{
      if(!this.editDescription || !this.editDate || !this.editAmount){
        alert('Please fill out form!');
        return;
      }

      const editedTransaction: Transaction = {
        description: this.editDescription,
        date: this.editDate,
        amount: this.editAmount
      };
      this.onEdit(editedTransaction)
      this.editDescription = '';
      this.editDate = '';
      this.editAmount = 0;

    }

  }

  onAdd(newTransaction: Transaction){
    this.onAddTransaction.emit(newTransaction);
  }

  onEdit(editedTransaction: Transaction){
    this.onEditTransaction.emit(editedTransaction);
  }

  //Uncomment description, date, and amount
  fillForm(){
    this.id = this.currEdit.id;
    this.editDescription = this.currEdit.description;
    this.editDate = this.currEdit.date;
    this.editAmount = this.currEdit.amount;
  }

  cancelEdit(){
    this.description = '';
    this.date = '';
    this.amount = 0;
    this.onCancelEdit.emit();
  }
}
