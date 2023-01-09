import "./ExpenseDate.css";

function ExpenseDate(props) {
  // getFullYear method
  // Returns the year of the specified date according to local time. 
  const year = props.date.getFullYear();
  // toLocaleString method
  // Returns a string with a language-sensitive representation of this date.
  const month = props.date.toLocaleString("hu-HU", { month: "long" });
  const day = props.date.toLocaleString("hu-HU", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
