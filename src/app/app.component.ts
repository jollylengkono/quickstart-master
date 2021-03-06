import {Component, ViewChild, Injector} from '@angular/core';
import {Account} from './account/account.model';
import {AccountForm} from './account/account_form.component';
import {AccountService} from './account/account.services';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent  {

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
