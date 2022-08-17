import React,{useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = (props)=>{

    const[enteredTitle,setEnteredTitle]= useState('');
    const[enteredAmt,setEnteredAmt]= useState('');
    const[enteredDate,setEnteredDate]= useState('');
    const titleChanger= (event)=>{
        setEnteredTitle(event.target.value);
    };
    const AmountChanger= (event)=>{
        setEnteredAmt(event.target.value);
    };
    const DateChanger= (event)=>{
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmt,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmt('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__Controls">
                <div>
                    <label>Title</label>
                    <input type="text" value ={enteredTitle} onChange={titleChanger}/>

                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value = {enteredAmt} onChange={AmountChanger}/>

                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value ={enteredDate} onChange={DateChanger}/>

                </div>

            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>


    );
}

export default ExpenseForm;