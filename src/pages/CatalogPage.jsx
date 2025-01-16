import React, { useState } from 'react';
import ListOfCamper from '../componenets/ListOfCamper';
import FilterCamp from '../componenets/FilterCamp';

const CatalogPage = () => {
  const [filters, setFilters] = useState(null);

  // Handle the filters passed from FilterCamp
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Catalog Page</h1>
      {/* Filter Component */}
      <FilterCamp onFilter={handleFilterChange} />
      {/* List of Campers */}
      <ListOfCamper filters={filters} />
    </div>
  );
};

export default CatalogPage;
