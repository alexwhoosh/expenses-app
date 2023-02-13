import Expenses from "./components/Expenses/Expenses";
import ExpensesItems from "./App.constants"

function App() {
    return (
        <div>
            <h2>Some text</h2>
            <Expenses items={ExpensesItems}/>
        </div>
    );
}

export default App;
