import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = [
    { name: 'React' },
    {  name: 'Nodejs' },
    {  name: 'Component' },
    {  name:'Edison'},
    {  name:'Trọng Lân'},
    
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h3>Search</h3>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul style={{listStyle:'none'}}>
        {filteredItems.map((item) => (
          <li >{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;