import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

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
                <ExpensesChart expenses={expenses}/>
                <ExpensesList items={expenses}/>  
            </Card>
        </div>
        
    )
}

export default Expenses;