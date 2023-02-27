import Expenses from "./components/Expenses/Expenses";
import ExpensesItems from "./App.constants";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const addExpenseHandler = expenseData => {
        console.log(expenseData);
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={ExpensesItems}/>
        </div>
    );
}

export default App;
