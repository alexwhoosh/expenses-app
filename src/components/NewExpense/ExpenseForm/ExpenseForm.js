import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseFormInput from "./ExpenseFormInput";

const ExpenseForm = ({onSaveExpenseData}) => {
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
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    
    const onTitleChange = value => {
        setTitle(value);
    };
    
    const onAmountChange = value => {
        setAmount(value);
    };
    
    const onDateChange = value => {
        setDate(value);
    };

    const resetFormState = () => {
        setTitle("");
        setAmount("");
        setDate("");
    };

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        onSaveExpenseData(expenseData);
        resetFormState();
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <ExpenseFormInput 
                    label="Title" 
                    value={title}
                    type="text"
                    onChange={onTitleChange} 
                />
                <ExpenseFormInput 
                    label="Amount" 
                    value={amount}
                    type="number" 
                    min="0.01"
                    step="0.01"
                    onChange={onAmountChange}
                />
                <ExpenseFormInput 
                    label="Date"
                    value={date} 
                    type="date" 
                    min="2020-01-01"
                    max="2024-12-31"
                    onChange={onDateChange}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;