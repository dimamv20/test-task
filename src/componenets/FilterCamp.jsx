import React, { useState } from 'react';

const FilterCamp = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: '',
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    type: '', // vehicle type: van, Fully Integrated, alcove
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle search button click
  const handleSearch = () => {
    onFilter(filters); // Pass the selected filters to the parent component
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
      <h3>Filter Campers</h3>
      {/* Location Filter */}
      <div>
        <label>
          Location:
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={filters.location}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Vehicle Equipment Filters */}
      <div>
        <h4>Vehicle Equipment</h4>
        <label>
          <input
            type="checkbox"
            name="ac"
            checked={filters.ac}
            onChange={handleChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            name="automatic"
            checked={filters.automatic}
            onChange={handleChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="tv"
            checked={filters.tv}
            onChange={handleChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={filters.bathroom}
            onChange={handleChange}
          />
          Bathroom
        </label>
      </div>

      {/* Vehicle Type Filter */}
      <div>
        <h4>Vehicle Type</h4>
        <label>
          <input
            type="radio"
            name="type"
            value="van"
            checked={filters.type === 'van'}
            onChange={handleChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Fully Integrated"
            checked={filters.type === 'Fully Integrated'}
            onChange={handleChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="alcove"
            checked={filters.type === 'alcove'}
            onChange={handleChange}
          />
          Alcove
        </label>
      </div>

      {/* Search Button */}
      <button onClick={handleSearch} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Search
      </button>
    </div>
  );
};

export default FilterCamp;
