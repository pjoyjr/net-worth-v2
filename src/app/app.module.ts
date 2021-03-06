import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccountGridComponent } from './components/account-grid/account-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {path: '', component: TransactionsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    FooterComponent,
    ButtonComponent,
    MenuComponent,
    AccountGridComponent,
    HeaderComponent,
    FormComponent,
    DataTableComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    MatSortModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
