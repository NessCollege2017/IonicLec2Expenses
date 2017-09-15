import { Expense } from './expense.model';
export class ExpensesService{

    categories:[string] = ["Food", "Travel", "Other"]

    expenses:[Expense] = [{
        id: 1,
        amount: 10,
        description: 'Le Big Mac',
        category: 'Food',
        date: '2017-09-12'
      },
      {
        id: 2,
        amount: 10,
        description: 'Train Ticket',
        category: 'Transport',
        date: '2017-09-12'
      },
      {
        id: 3,
        amount: 1,
        description: 'Bamba',
        category: 'Food',
        date: '2017-09-11'
      }
    ]

    findIndex(expense:Expense):number{
       let idx = this.expenses.findIndex((e)=>{return e.id == expense.id})
       return idx
    }

    updateExpense(expense:Expense){
      let idx = this.findIndex(expense)
      this.expenses[idx] = expense;
    }
    idx = 4
    newExpense(expense:Expense){
      //let new id...
      let id = this.idx++
      
      //assign the id to the given parameter expense
      expense.id = id
      //save(push) it to the array.
      this.expenses.push(expense)
    }

    trash(expense:Expense){
      let idx = this.findIndex(expense)
      this.expenses.splice(idx, 1)
    }
}