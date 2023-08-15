import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const SaveExpenseDataHandler = (enteredExpenseDat) => {
    const expenseDat = {
        ...enteredExpenseDat,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseDat)
    // clearHandler() or
    setIsFullForm(false)
}
  const [isFullForm, setIsFullForm] = useState(true);

  let clearHandler = () => {
    setIsFullForm(false)
  }

  let formHandler = () => {
  setIsFullForm(true)
  }
    return <div className="new-expense">
        {!isFullForm && (
            <button onClick={formHandler}>Add new expense</button>
        )}
        {isFullForm && (
            <ExpenseForm 
            onSaveExpenseData={SaveExpenseDataHandler} 
            onCancel={clearHandler}
            />
        )}
    </div>
}
export default NewExpense;