import {Component, ViewChild, Injector} from '@angular/core';
import {Account} from './account.model';
import {AccountForm} from './account_form.component';
import {AccountService} from './account.services';


@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css']
})

export class AccountComponent  {

  private _accounts:Array<Account> = [];

  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  @ViewChild(AccountForm) form:AccountForm;
  private createAccError:string = "";

  private createAcc(newAccount:Account) {
    this._accountService.create(newAccount).then(account => {
        console.log(account);
        this.createAccError = "";
        this.form.resetForm();
      }).catch(err => this.createAccError = err);
  }

  private removeAcc(index:number) {
    this._accountService.remove(index).then(index => console.log(index));
  }
}
