
import { Expense } from './expense.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

 export const url = 'https://ionic-dev-ebb25.firebaseio.com/expenses.json'
@Injectable()
export class ExpensesService{
 // url = 'https://ionic-dev-ebb25.firebaseio.com/expenses.json'
  constructor(private http: Http){
  }
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  expenses:Expense[] = [] 
    categories:[string] = ["Food", "Travel", "Other"]

    newExpense(expense:Expense){
      let expenseJson = JSON.stringify(expense)
      this.http.post(url, expenseJson).toPromise().then(response =>{
        console.log(response)
      })
    }

    getExpenses():Promise<Expense[]>{
     return  this.http.get(url).toPromise().then(response=>{
        let json = response.json()
        let keys:string[] = Object.keys(json)
        let expenses: Expense[] = keys.map(key => {
                let expenseWithoutID =  json[key]
                expenseWithoutID['id'] = key
                return expenseWithoutID
        })
      return expenses
     })
    }
    getExpense(id:string){
      return null
    }
    trash(expense:Expense){
      return null
     }
    updateExpense(expense:Expense){
      return null
    }
}