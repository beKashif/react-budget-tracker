import logo from './logo.svg';
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Spent from './components/Spent';
import { AppProvider } from './context/AppContext';

function App() {
  return (
<>
<AppProvider>
<div className="App">
      <div className='flex justify-center'>
        <Budget />
        <Remaining />
        <Spent />
      </div>

      <ExpenseList />
      <AddExpenseForm />
    </div>
</AppProvider>
</>
  );
}

export default App;
