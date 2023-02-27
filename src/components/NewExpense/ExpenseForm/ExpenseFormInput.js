import React from "react";

import "./ExpenseFormInput.css";

const ExpenseFormInput = (props) => {
    return (
        <div className="new-expense__control">
            <label>{props.labelName}</label>
            <input 
                value={props.inputValue}
                type={props.inputType}
                min={props.inputMin}
                max={props.inputMax}
                step={props.inputStep}
                onChange={props.onChange}
            />
        </div>
    )
};

export default ExpenseFormInput;