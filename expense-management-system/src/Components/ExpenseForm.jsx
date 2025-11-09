import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add Expense</button>
    </form>
  );
}
