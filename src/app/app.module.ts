import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccountGridComponent } from './components/account-grid/account-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';


const appRoutes: Routes = [
  {path: '', component: TransactionsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionItemComponent,
    FooterComponent,
    ButtonComponent,
    MenuComponent,
    AccountGridComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FontAwesomeModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
