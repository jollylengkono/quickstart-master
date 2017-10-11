import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';
import { AccountService } from './account/account.services';
import { LoggerService } from './util/logger.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList, AccountForm ],
  bootstrap:    [ AppComponent ],
  providers:    [ AccountService, LoggerService ]
})
export class AppModule { }
