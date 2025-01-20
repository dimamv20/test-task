import React, { useState } from 'react';
import FilterCamp from '../componenets/FilterCamp';
import ListOfCamper from '../componenets/ListOfCamper';

const CatalogPage = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    console.log("Filters updated:", newFilters);
    setFilters(newFilters);
  };

  return (
    <div className='page-catalog'>
      <FilterCamp onFilter={handleFilterChange} />
      <ListOfCamper filters={filters} />
    </div>
  );
};

export default CatalogPage;
