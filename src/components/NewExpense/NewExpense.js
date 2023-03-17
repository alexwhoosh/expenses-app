import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const startEditing = () => {
        setIsEditing(true);
    };

    const stopEditing = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = enteredExpenseData => {
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        onAddExpense(expenseData);
    };
    
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && (
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={stopEditing}
        />
        )}
    </div>
};

export default NewExpense;