import { useState } from "react";

// Can be emitted but lot of react project has it
// import React from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const openFormHandler = () => {
    setIsFormOpened(true);
  };

  const closeFormHandler = () => {
    setIsFormOpened(false);
  };

  // We pass this function, to the ExpenseForm subcomponent, so when something happens
  // in ExpenseForm, then this function will execute
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormOpened && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
      {/* 'onSaveExpenseData' added later, you name it the way you want
       it escapes the object we created from the entered data in ExpenseForm*/}
      {isFormOpened && (
        <ExpenseForm
          onCancel={closeFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
