import { ExpensesService } from './../../app/expenses.service';
import { Expense } from './../../app/expense.model';
import {Component} from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  expense:Expense
  categories:[string]

  //new Alert
  constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private expenseService: ExpensesService, 
      private alertCtrl:AlertController
    ) {
    this.expense = this.navParams.get('expense')
    this.categories = this.expenseService.categories
    console.log(this.expense);
  }

  apply(){
    //if it's a new expense, service.newExpense, else-> service.updateExpense(expense)
    if(this.expense.id){
      this.expenseService.updateExpense(this.expense)
    }else{
      this.expenseService.newExpense(this.expense)
    }
    this.navCtrl.pop()
  }

  trash(){
    let dialog = this.alertCtrl.create({
      title: 'Delete',
      message: 'Are you sure you want to delete this expense?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Agree',
          handler: () => {
            this.expenseService.trash(this.expense)
            this.navCtrl.pop()
          }
        }
      ]
    });
    dialog.present();
  }
}
