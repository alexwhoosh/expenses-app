import React from "react";

import "./ExpenseFormInput.css";

const ExpenseFormInput = ({label, value, type, min, max, step, onChange}) => {
    return (
        <div className="new-expense__control">
            <label>{label}</label>
            <input 
                value={value}
                type={type}
                min={min}
                max={max}
                step={step}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    )
};

export default ExpenseFormInput;