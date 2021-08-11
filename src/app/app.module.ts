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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountGridComponent } from './components/account-grid/account-grid.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'add', component: AddTransactionComponent},
  {path: 'edit', component: SidebarComponent},
  {path: 'delete', component: SidebarComponent},
  {path: 'search', component: SidebarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionItemComponent,
    FooterComponent,
    ButtonComponent,
    AddTransactionComponent,
    MenuComponent,
    WelcomeComponent,
    SidebarComponent,
    AccountGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
