import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
}
export default Expenses;




// const [expenseitemList, setExpenseitemList] = useState(props.items);
// const filteredItemHandler = ((expense) => {
//     setExpenseitemList((prev) => {
//       expenseitemList.filter(expenseItem => expenseItem.date === filteredYear)
//     })
//     console.log(expense)
//   })
// const eventHandler = () => {
//   filterChangeHandler(filteredYear);
//   filteredItemHandler(expenseitemList)
//   console.log(expenseitemList);
// }

//        {props.items.filter(expenseItem => expenseItem.date.getFullYear().toString() === filteredYear).map((expense) => (

//         {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : (

//         {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//       {filteredExpenses.length > 0 &&

//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}