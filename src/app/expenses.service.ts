import  Dexie  from 'dexie';
import { Expense } from './expense.model';
import uuidv1 from 'uuid/v1'

export class ExpensesService extends Dexie{

  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  expenses:Dexie.Table<Expense, string> // number = type of the primkey
  
  constructor () {
    super("expense-tracker"); //DB Name:
    this.version(1).stores({ //DB Version
        expenses: 'id, date',/* TableName: indexOn: only the indexed columns */
        //...other tables goes here...
    });
}

    categories:[string] = ["Food", "Travel", "Other"]


    getExpenses():Expense[]{
      //TODO:
      return new Array<Expense>()
    }
    findIndex(expense:Expense):number{
      //TODO: 
       return null
    }

    updateExpense(expense:Expense){
          //TODO: 
    }

    newExpense(expense:Expense){
      //let new id...
      let id = uuidv1()
     //TODO:
    }

    trash(expense:Expense){
     //TODO:
    }
}