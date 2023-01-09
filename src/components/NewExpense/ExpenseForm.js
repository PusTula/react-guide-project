// The goal with useState here is to store the input values
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // useState receives a value
  // useState receives a '' as arg. cuz the input's value will always be a string
  // Using separated States IS OKAY, it may be used more "in the wild"
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /* Another solution: you pass an object
   * But you need to update ALL THREE properties
    const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  */

  /* PRACTISES FOR PASSING AN OBJECT
   const titleChangeHandler = (event) => {
   *** BAD PRACTISE ***
   * React doesn't merge the two states, so if other properties are not
   * assigned, then they are dumped - lost
   *
    setUserInput({
    * spread operator
    * takes an object, here userInput, pulls out all properties and values
    * and adds them to a new object
      ...userInput,
      enteredTitle: event.target.value;
    });
   *
   * Updating states is not executed instantly, just scheduled, it
   * can happen to rely in a called stage, to an outdated one.
   * For this reason the GOOD PRACTISE solution should be used. Thats guaranteed.
   *
   *
   *** GOOD PRACTICE ***
   * pass another function
   * this will be automatically executed by React
   *
    setUserInput((prevState) => {
    // friendly reminder: returns an object
      return { ...prevState, enteredTitle: event.target.value };
    });
   };
   */

  const submitHandler = (event) => {
    // Prevents HTTP request -> no page reload
    event.preventDefault();

    // The values point to the State variables
    // TODO: Know how data is created!!!
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Car"
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
            placeholder="200"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
