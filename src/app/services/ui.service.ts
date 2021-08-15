import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showEditTransaction: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleEditTransaction(): void {
    this.showEditTransaction = !this.showEditTransaction;
    this.subject.next(this.showEditTransaction);
  }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
