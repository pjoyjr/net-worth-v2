import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTransaction: boolean = true;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTransaction(): void {
    this.showAddTransaction = !this.showAddTransaction;
    this.subject.next(this.showAddTransaction);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
