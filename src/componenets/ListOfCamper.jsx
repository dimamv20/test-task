import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Camper from './Camper.jsx';

const ListOfCamper = ({ filters }) => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const buildQueryString = (filters) => {
    const queryParams = new URLSearchParams();
    queryParams.append('limit', 10);
    queryParams.append('page', page);

    if (filters.location) queryParams.append('location', filters.location);


    if (filters.type) {
      const formattedType = filters.type.replace(/\s+/g, '');
      queryParams.append('form', formattedType);
    }


    const equipmentKeys = ['AC', 'TV', 'bathroom', 'kitchen', 'microwave', 'refrigerator', 'gas', 'water', 'radio'];
    equipmentKeys.forEach((key) => {
      if (filters[key]) {
        queryParams.append(`${key.toLowerCase()}-true`, '');
      }
    });

    return queryParams.toString();
  };

  useEffect(() => {
    setCampers([]); 
    setPage(1);
    setHasMore(true);
  }, [filters]);

  useEffect(() => {
    const fetchCampers = async () => {
      setLoading(true);
      setError(null);

      const queryString = buildQueryString(filters);
      const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${queryString}`;

      console.log("Fetching from API:", url);

      try {
        const response = await axios.get(url);

        if (response.data && Array.isArray(response.data.items)) {
          setCampers((prevCampers) => {
            const combinedCampers = [...prevCampers, ...response.data.items];
            const uniqueCampers = combinedCampers.filter(
              (camper, index, self) =>
                index === self.findIndex((c) => c.id === camper.id)
            );
            return uniqueCampers;
          });
          setHasMore(response.data.items.length === 10); 
        } else {
          setHasMore(false);
          console.error("Unexpected response format:", response.data);
        }
      } catch (err) {
        setError(`Error fetching campers: ${err.response?.status} - ${err.message}`);
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampers();
  }, [filters, page]);


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="list-of-camper">
      {campers.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {campers.map((camper) => (
            <li key={`${camper.id}-${camper.location}`}>
              <Camper camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No campers found. Please adjust your filters.</p>
      )}

      {loading && <p>Loading campers...</p>}

      {hasMore && !loading && (
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ListOfCamper;
