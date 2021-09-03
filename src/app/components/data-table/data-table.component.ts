import { Component,  OnInit, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import {Sort} from '@angular/material/sort';
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
  filterName: any | String ="";
  filterAsc: boolean = true;
  sortSetting: any | [string, boolean] = ["", true];
  
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

  sortData(sort: Sort) {
    const data = this.transactions;
    if (!sort.active || sort.direction === '') {
      this.transactions = data;
      return;
    }

    this.transactions = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
