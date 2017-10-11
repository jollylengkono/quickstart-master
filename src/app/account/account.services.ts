import {Injectable, Optional} from '@angular/core';
import {Account} from './account.model';
import {LoggerService} from '../util/logger.service';


@Injectable()
export class AccountService {

  constructor(@Optional() private _logger:LoggerService){} //1

  private _accounts:Array<Account> = [];

  public getAll():Promise<Array<Account>> {
    return Promise.resolve(this._accounts);
  }

  private _nextId = 3;
  private _accountLimit = 3;

  public create(newAccount:Account) {
    return new Promise((resolve, reject) => {
      if (this._accounts.length >= this._accountLimit) {
        reject("Maximum accounts limit reached.");
        return;
      }

      newAccount.id = this._nextId++;
      if(this._logger)
        this._logger.log('Account created: ' + newAccount.title);
      this._accounts.push(newAccount);
      resolve(newAccount);
    });
  }

  public remove(index:number) {
    return new Promise((resolve, reject) => {
      if(this._logger)
        this._logger.log('Account deleted: ' + this._accounts[index].title);
      this._accounts.splice(index, 1);
      resolve(index);
    });
  }
}
