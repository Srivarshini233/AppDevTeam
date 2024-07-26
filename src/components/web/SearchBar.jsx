import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-primary text-white rounded-md dark:bg-yellow-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
