import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Camper from './Camper';

const ListOfCamper = ({ filters }) => {
  const [campers, setCampers] = useState([]);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        setCampers(response.data.items);
        setFilteredCampers(response.data.items); // Default to all campers
      } catch (err) {
        setError('Error fetching campers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampers();
  }, []);

  useEffect(() => {
    if (filters) {
      let filtered = campers;

      // Filter by location
      if (filters.location) {
        filtered = filtered.filter((camper) =>
          camper.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }

      // Filter by vehicle equipment
      Object.keys(filters).forEach((key) => {
        if (filters[key] === true) {
          filtered = filtered.filter((camper) => camper[key] === true);
        }
      });

      // Filter by vehicle type
      if (filters.type) {
        filtered = filtered.filter((camper) => camper.form === filters.type);
      }

      setFilteredCampers(filtered);
    }
  }, [filters, campers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredCampers.slice(0, 10).map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCamper;
