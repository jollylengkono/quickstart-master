import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent }  from './account/account.component';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';
import { AccountService } from './account/account.services';
import { LoggerService } from './util/logger.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ListComponent } from './account/list.component';
import { CreateComponent } from './account/create.component';
import { DetailComponent } from './account/detail.component';

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {
    path: 'accounts',
    component: AccountComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'create', component: CreateComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: ':id', component: DetailComponent}
    ]
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes, {enableTracing:true}) ],
  declarations: [
    AccountComponent,
    AccountsList,
    AccountForm,
    HomeComponent,
    AppComponent,
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ AccountService, LoggerService ]
})
export class AppModule { }
