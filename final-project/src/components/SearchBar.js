import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search books by title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;