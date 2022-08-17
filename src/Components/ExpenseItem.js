import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React,{useState} from 'react';

function ExpenseItem(props){
    
    // var [title,setTitle]= useState(props.title);
    // var[newTitle,setNewTitle] = useState("HI");
    // const clickHandler = ()=>{
    //     setTitle(newTitle);
    // };
    // const changeHandler= (event)=>{
    //     setNewTitle(event.target.value);
    // };

    return (
        <Card className="expense-Item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="example">
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}/>
        <button onClick={clickHandler}>Change the title</button> */}

        </Card>
    );
}

export default ExpenseItem;

