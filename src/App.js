import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import DUMMY_EXPENSES from "./App.constants";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
