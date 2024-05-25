import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Hades', category: 'A' },
    { id: 2, name: 'Poseidon ', category: 'B' },
    { id: 3, name: 'Persephone', category: 'B' },
    { id: 4, name: 'Zeus', category: 'A' },
    { id: 5, name: 'Apollo', category: 'A' },
    { id: 6, name: 'Ares', category: 'A' },
    { id: 7, name: 'Hera', category: 'C' },
    { id: 8, name: 'Hestia', category: 'C' },
    
  ]);

  const [filter, setFilter] = useState('All');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <div className="container">
      <h1>Greek Gods Strength</h1>
      <label>
        Filter by Strength:
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </label>
      <ul className="list">
        {filteredItems.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
