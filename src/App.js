import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import React,{useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Card from './Components/Card';

let expenseDate = new Date(2021,3,2);
let expenseTite = "School Fee";
let expenseAmount = 300;
let DUMMY = [{
  id:'e1',
  title:'School Fee',
  amount:250,
  date: new Date(2021,5,25)
},
{
  id:'e2',
  title:'Gym Fee',
  amount:1000,
  date: new Date(2021,5,28)
}
];
function App() {
const[expenses,setExpenses] = useState(DUMMY);
// fetch('https://localhost')
 

const addExpHandler=(expense)=>{
  setExpenses([expense,...expenses]);
  console.log(expense);
};
  return (
    // <div>
    //  
    //   {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
    //   <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/> */}
      
    // </div>
    <Card>
       <NewExpense onAddExp ={addExpHandler}/>
      {
        expenses.map(
          exp=>(
            <ExpenseItem 
            key = {exp.id}
            date={exp.date} 
            title={exp.title}
             amount={exp.amount}/>
          )
        )
      }

    </Card>
  );
}

export default App;
