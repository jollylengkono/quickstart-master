import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';


export const routes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'accounts', component:AccountComponent}
];
