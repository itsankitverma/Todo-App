import { useState } from "react";

export default function App() {
  const [add, setAdd] = useState("");
  const [details, setDetails] = useState([]);

  const handleAdd = () => {
    setDetails([...details, add]);
    setAdd("");
  };

  const handleDelete = (idx) => {
    console.log(idx);
    const deleteElement = details.filter((val, ind) => {
      return ind !== idx;
    });
    setDetails(deleteElement);
  };

  return (
    <div>
      <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <div>
        {details.map((value, id) => {
          return (
            <div
              key={id}
              style={{ display: "flex", alignItems: "center", gap: "5pc" }}
            >
              <p>{value}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
