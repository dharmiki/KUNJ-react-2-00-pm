export default function ExpenseList({ expenses, onDelete }) {
  return (
    <ul>
      {expenses.map((e) => (
        <li key={e.id} style={{ marginBottom: 10 }}>
          <strong>{e.description}</strong> — ${e.amount}
          <button
            onClick={() => onDelete(e.id)}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
