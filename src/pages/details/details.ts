import {
  Component
} from '@angular/core';
import {
  NavController, NavParams
} from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  expense
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expense = this.navParams.get('expense');
    console.log(this.expense);
  }
 

}
