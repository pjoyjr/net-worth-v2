import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from  '../../Transaction';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  searchWord: any | String = "";
  
  showEditTransaction: boolean = false;
  subscription: any | Subscription;
  @Output() onEditTransaction: EventEmitter<Transaction> = new EventEmitter();
  @Output() onDeleteTransaction: EventEmitter<Transaction> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditTransaction = value)); }

  ngOnInit(): void {
  }

  onDelete(transaction: Transaction): void {
    this.onDeleteTransaction.emit(transaction);
  }

  onEdit(transaction: Transaction): void {
    this.onEditTransaction.emit(transaction);
  }

}
