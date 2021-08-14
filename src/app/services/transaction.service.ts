import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from  '../Transaction';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private apiURL = 'http://localhost:5000/transactions';

  constructor(private http:HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiURL);
  }
  
  deleteTransaction(transaction: Transaction): Observable<Transaction> {
    const url = `${this.apiURL}/${transaction.id}`;
    return this.http.delete<Transaction>(url);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiURL, transaction, httpOptions);
  }
}
