import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from "./components/Expenses/ExpenseItem";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 790.49, 
    date: new Date(2023, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log({year});
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// export default function App() {
//     const [Validity, setValidity] = React.useState('1');

//     const clickHandler=(event) => {
//          let x = event.target.value;
//           setValidity(x++);
//     }
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={clickHandler}/>
//             <p>{Validity}</p>
//         </form>
//     );
// }

// export default function App() {
//     let [count, setcount] = React.useState('1');
//     const clickHandler=() => {
//       count++;
//       setcount(count++);
// OR;
//       setcount((prevCount) => {
//       return prevCount + 1;
// });
//     }
//     return (
//       <div>
//         <p id="counter">{count}</p>
//         <button onClick={clickHandler}>Increment</button>
//       </div>
//     );
// }
