// Imports React object
// Imports a single piece from the library. A function called useState
// useState is a so called react hook
// ALL hooks start with the word 'use'
// They have to be called in component functions, NOT NESTED DEEPER
// import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* Calling useState() to use concept
  * - Returns an array.
  * - First element is a 'variable'. When it's value changes the
  *   function reevaluates the content of the component it's called in.
  * - Second element is a function that can change the value of the
  *   variable
  */
  // Name the variable and the function, by array destructuring
  // Naming: variable -> after the Component's corresponding part
  // function -> set + Variable = setVariable
  // const [title, setTitle] = useState(props.title);
  /*
  function clickHandler() {
    // Not just reassigns value, but reevaluates JSX code too!!!
    setTitle('Updated!');
    // The reassign is scheduled so returns original value
    console.log(title);
    // <button onClick={clickHandler}>Change Title</button>
  };
  */
  return (
    // This would be an imperative & native JS approach of handling events
    // document.getElementById('root').addEventListener();
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      
    </Card>
    </li>
  );
}

export default ExpenseItem;
