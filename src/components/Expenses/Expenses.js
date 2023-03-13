import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses({ items }) {
    const [year, setYear] = useState("2023");
    
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
    };
    
    const expenses = items.filter(expense => {
        const expenseYear = expense.date.getFullYear().toString();
        return expenseYear === year;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    yearSelected={year} 
                    onFilterChange={filterChangeHandler} 
                />
            <ExpensesList items={expenses}/>  
            </Card>
        </div>
        
    )
}

export default Expenses;