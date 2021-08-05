import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { MenuComponent } from './components/menu/menu.component';

//const appRoutes: Routes = [{path: '', component: TransactionsComponent},{path: 'about', component: AboutComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionItemComponent,
    FooterComponent,
    ButtonComponent,
    AddTransactionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
