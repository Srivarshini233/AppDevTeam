import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ filters, setFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    setFilters({ ...filters, categories: newSelectedCategories });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    setFilters({ ...filters, priceRange: e.target.value });
  };

  return (
    <div className="sidebar">
      <div className='backgroundColor=#e0f7fa'></div>
      <h3>Filter Options</h3>
      <div className="filter-group">
        <label>Categories:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="cars"
              checked={selectedCategories.includes('cars')}
              onChange={handleCategoryChange}
            />
            Cars
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="dolls"
              checked={selectedCategories.includes('dolls')}
              onChange={handleCategoryChange}
            />
            Dolls
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="blocks"
              checked={selectedCategories.includes('blocks')}
              onChange={handleCategoryChange}
            />
            Blocks
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="musical"
              checked={selectedCategories.includes('musical')}
              onChange={handleCategoryChange}
            />
            Musical
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="plush"
              checked={selectedCategories.includes('plush')}
              onChange={handleCategoryChange}
            />
            Plush Toys
          </label>
        </div>
      </div>
      <div className="filter-group">
        <label>Price Range:</label>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="0-25"
              checked={priceRange === '0-25'}
              onChange={handlePriceChange}
            />
            0 - 25
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="25-50"
              checked={priceRange === '25-50'}
              onChange={handlePriceChange}
            />
            25 - 50
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="50-100"
              checked={priceRange === '50-100'}
              onChange={handlePriceChange}
            />
            50 - 100
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="100+"
              checked={priceRange === '100+'}
              onChange={handlePriceChange}
            />
            100+
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
