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


    newExpense(expense:Expense):Dexie.Promise<string>{
      //let new id...
      let id = uuidv1()
      expense.id = id
      //Table object:
      return this.expenses.add(expense)
    }

    //Expense[]...Dexie.Promise<Expense[]>
    //Promise you won't callback
    getExpenses():Dexie.Promise<Expense[]>{
      return this.expenses.toArray()
    }

    getExpense(id:string):Dexie.Promise<Expense>{
      return this.expenses.get(id)
    }

    trash(expense:Expense):Dexie.Promise<void>{
      return this.expenses.delete(expense.id)
     }

    updateExpense(expense:Expense):Dexie.Promise<number>{
      return this.expenses.update(expense.id, expense) 
    }

}