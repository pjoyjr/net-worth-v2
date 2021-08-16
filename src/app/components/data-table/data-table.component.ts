import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from  '../../Transaction';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  dtOptions: any = {};
  
  subscription: any | Subscription;
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onDeleteTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5,10,25],
      processing: true
    };
  }

  onDelete(transaction: Transaction): void {
    this.onDeleteTransaction.emit(transaction);
  }

  onEdit(transaction: Transaction): void {
    this.onEditTransaction.emit(transaction);
  }

}
