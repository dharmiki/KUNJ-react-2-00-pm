import { useState, useEffect } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
