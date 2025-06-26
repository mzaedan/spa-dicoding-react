import React from 'react';

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul..."
      className="search-bar"
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
    />
  );
}

export default SearchBar;
