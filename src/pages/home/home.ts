import { Expense } from './../../app/expense.model';
import { ExpensesService } from './../../app/expenses.service';

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private expenseService: ExpensesService) {
    this.expenses = this.expenseService.expenses
  }
  expenses:[Expense] 

  details(expense) {
    let copy = Object.assign({}, expense)

    let bundle = {'expense': copy}
    this.navCtrl.push(DetailsPage, bundle)
  }

  newExpense(){
    // We don't know the id for a new item yet.
    // once it's created, the service will assign it the id.
    
    let expense:Expense  = {amount:1, category:"Other", date:new Date().toISOString(), description:""}
    let bundle = {'expense': expense}
    this.navCtrl.push(DetailsPage, bundle)
  }
}
// iso 8601 yyyy-mm-dd
// epoch
