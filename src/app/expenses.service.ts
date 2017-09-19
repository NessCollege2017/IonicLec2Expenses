import { Expense } from './expense.model';
import uuidv1 from 'uuid/v1'

export class ExpensesService{

  
    categories:[string] = ["Food", "Travel", "Other"]

    expenses:Expense[] = []//new Array<Expense>()
    constructor(){
      this.reloadAll();
    }

    findIndex(expense:Expense):number{
       let idx = this.expenses.findIndex((e)=>{return e.id == expense.id})
       return idx
    }

    updateExpense(expense:Expense){
      let idx = this.findIndex(expense)
      this.expenses[idx] = expense;
      this.saveAndReload()
    }

    newExpense(expense:Expense){
      //let new id...
      let id = uuidv1()
      
      //assign the id to the given parameter expense
      expense.id = id
      //save(push) it to the array.
      this.expenses.push(expense)
      this.saveAndReload()
      //localStoarge only takes strings....
    }

    trash(expense:Expense){
      let idx = this.findIndex(expense)
      this.expenses.splice(idx, 1)
      this.saveAndReload()
    }

    saveAll(){
      let jsonString = JSON.stringify(this.expenses)
      //setItem(string, string) like sharedPrefs in android
      localStorage.setItem('expenses', jsonString)
    }

    reloadAll(){
      let all = localStorage.getItem('expenses')
      this.expenses = JSON.parse(all)
    }

    saveAndReload(){
      this.saveAll()
      this.reloadAll()
    }
}