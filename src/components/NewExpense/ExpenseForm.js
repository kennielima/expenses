import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     // enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // })
  };

  const AmountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,enteredAmount: event.target.value,
    // })
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,enteredDate: event.target.value,
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // clearHandler();
  };
  // const [isFullForm, setIsFullForm] = useState(false);
  // let clearHandler = () => {
  //   setIsFullForm(false)
  // }
  // let formHandler = () => {
  // setIsFullForm(true)
  // }
  // let details = <button onClick={formHandler}>Add new expense</button>;
  // if (isFullForm) {
  //   details =(
  //   <div>
  // </div>
  //   )
  // }

  return (
    <form onSubmit={submitHandler}>
      {/* {details} */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
