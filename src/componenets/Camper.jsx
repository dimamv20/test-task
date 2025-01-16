import React from 'react';

const Camper = ({ camper }) => {
  const { name, description, price, location, gallery } = camper;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      {/* Camper Image */}
      {gallery && gallery.length > 0 && (
        <img
          src={gallery[0].thumb} // Use the thumbnail image
          alt={name}
          style={{ width: '100%', maxWidth: '300px', borderRadius: '5px', marginBottom: '10px' }}
        />
      )}
      {/* Camper Details */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default Camper;
