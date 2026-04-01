export default function StudentCard({ s, onDelete }) {
  return (
    <div className="card">
      <h3>{s.name}</h3>
      <p>{s.course}</p>
      <button onClick={() => onDelete(s.id)}>Delete</button>
    </div>
  );
}