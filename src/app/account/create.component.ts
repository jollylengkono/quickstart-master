import {Component, ViewChild} from '@angular/core';
import {Account} from './account.model';
import {AccountForm} from './account_form.component';
import {AccountService} from './account.services';


@Component({
  templateUrl: 'app/account/create.component.html'
})

export class CreateComponent {
  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
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
}
