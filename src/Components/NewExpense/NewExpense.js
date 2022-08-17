import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseaData)=>{
        const expenseData={
            ...enteredExpenseaData,id:Math.random().toString()
        }
        props.onAddExp(expenseData);
        console.log(expenseData);

    };
  
    return(
        <div className="newExpense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;