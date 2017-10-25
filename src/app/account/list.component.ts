import {Component} from '@angular/core';
import {Account} from './account.model';
import {AccountService} from './account.services';


@Component({
  templateUrl: 'app/account/list.component.html',
})


export class ListComponent {
  private _accounts:Array<Account> = [];

  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  private removeAcc(index:number) {
    this._accountService.remove(index).then(index => console.log(index));
  }
}