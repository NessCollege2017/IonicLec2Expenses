
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  expenses = [{
      id: 1,
      amount: 10,
      description: 'Le Big Mac',
      category: 'Food',
      date: '2017/09/12'
    },
    {
      id: 2,
      amount: 10.0012,
      description: 'Train Ticket',
      category: 'Transport',
      date: '2017/09/12'
    },
    {
      id: 3,
      amount: 1,
      description: 'Bamba',
      category: 'Food',
      date: '2017/09/11'
    },
  ]

  details(expense) {
    let bundle = {expense: expense}
    this.navCtrl.push(DetailsPage, bundle)
  }
}
// iso 8601 yyyy-mm-dd
// epoch
