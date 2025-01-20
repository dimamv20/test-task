import React, { useState } from 'react';
import '../App.css';
import acIcon from '../icons/svg/ac.svg';
import kitchenIcon from '../icons/svg/kitchen.svg';
import microwaveIcon from '../icons/svg/microwave.svg';
import tvIcon from '../icons/svg/tv.svg';
import bathroomIcon from '../icons/svg/bathroom.svg';
import vanIcon from '../icons/svg/van.svg';
import fullyIntegratedIcon from '../icons/svg/fully-integrated.svg';
import alcoveIcon from '../icons/svg/alcove.svg';

const FilterCamp = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: '',
    AC: false,
    TV: false,
    bathroom: false,
    kitchen: false,
    microwave: false,
    refrigerator: false,
    gas: false,
    water: false,
    radio: false,
    type: '',
  });
  
  const handleImageClick = (name) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: !prevFilters[name],
    }));
  };
  
  const handleTypeClick = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: prevFilters.type === type ? '' : type.toLowerCase(),
    }));
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  
  const handleSearch = () => {
    console.log("Applying filters:", filters);
    onFilter(filters);
  };
  
  return (
    <div className="filter-camp-container">
      <div className="filter-camp-location">
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

      <p id="filter">Filter</p>
      <div className="vehicle-equipment">
        <h4>Vehicle Equipment</h4>
        <div className="vehicle-equipment-icons icons-filter">
          {[{ name: 'AC', src: acIcon, label: 'AC' },
            { name: 'kitchen', src: kitchenIcon, label: 'Kitchen' },
            { name: 'TV', src: tvIcon, label: 'TV' },
            { name: 'bathroom', src: bathroomIcon, label: 'Bathroom' },
            { name: 'microwave', src: microwaveIcon, label: 'Microwave' }].map(({ name, src, label }) => (
            <div key={name}>
              <img
                src={src}
                alt={label}
                className={filters[name] ? 'selected' : ''}
                onClick={() => handleImageClick(name)}
              />
              <p className="label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vehicle-type">
        <h4>Vehicle Type</h4>
        <div className="vehicle-type-icons icons-filter">
          {[{ type: 'alcove', src: alcoveIcon, label: 'Alcove' },
            { type: 'van', src: vanIcon, label: 'Van' },
            { type: 'fully integrated', src: fullyIntegratedIcon, label: 'Fully Integrated' }].map(({ type, src, label }) => (
            <div key={type}>
              <img
                src={src}
                alt={label}
                className={filters.type === type ? 'selected' : ''}
                onClick={() => handleTypeClick(type)}
              />
              <p className="label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-camp-search">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default FilterCamp;
