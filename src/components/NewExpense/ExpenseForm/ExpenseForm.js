import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseFormInput from "./ExpenseFormInput";

const ExpenseForm = (props) => {
    // using single state for various inputs instead of multiple states
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmout: "",
    //     enteredDate: "",
    // });
    // const onTitleChangeHandler = event => {
    //     setUserInput((prevState) => { // use this syntax when depending on the previous state
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    // };
    // const onAmountChangeHandler = event => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmout: event.target.value};
    //     });
    // };
    // const onDateChangeHandler = event => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate: event.target.value};
    //     });
    // };

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    
    const onTitleChangeHandler = event => {
        setTitle(event.target.value);
    };
    
    const onAmountChangeHandler = event => {
        setAmount(event.target.value);
    };
    
    const onDateChangeHandler = event => {
        setDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <ExpenseFormInput 
                    labelName="Title" 
                    inputValue={title}
                    inputType="text"
                    onChange={onTitleChangeHandler} 
                />
                <ExpenseFormInput 
                    labelName="Amount" 
                    inputValue={amount}
                    inputType="number" 
                    inputMin="0.01"
                    inputStep="0.01"
                    onChange={onAmountChangeHandler}
                />
                <ExpenseFormInput 
                    labelName="Date"
                    inputValue={date} 
                    inputType="date" 
                    inputMin="2020-01-01"
                    inputMax="2024-12-31"
                    onChange={onDateChangeHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;