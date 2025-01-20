import React from 'react';
import { useNavigate } from 'react-router-dom';
import ratingIcon from '../icons/svg/rating.svg';
import acIcon from '../icons/svg/ac.svg';
import kitchenIcon from '../icons/svg/kitchen.svg';
import microwaveIcon from '../icons/svg/microwave.svg';
import tvIcon from '../icons/svg/tv.svg';
import bathroomIcon from '../icons/svg/bathroom.svg';
import vanIcon from '../icons/svg/van.svg';
import refrigeratorIcon from '../icons/svg/Refrigerator.svg';
import gasIcon from '../icons/svg/gas.svg';
import waterIcon from '../icons/svg/water.svg';
import automaticIcon from '../icons/svg/automatic.svg';
import radioIcon from '../icons/svg/radio.svg';

import '../App.css';

const Camper = ({ camper }) => {
  const navigate = useNavigate();
  const {
    name = 'Unknown Camper',
    price = 0,
    location = 'Unknown Location',
    gallery = [],
    AC = false,
    TV = false,
    bathroom = false,
    kitchen = false,
    refrigerator = false,
    microwave = false,
    gas = false,
    water = false,
    petrol = false,
    radio = false,
    transmission = 'Manual',
    description = 'No description available',
    rating = 0,
    reviews = [],
  } = camper;

  const featureIcons = {
    Automatic: automaticIcon,
    AC: acIcon,
    Petrol: vanIcon,
    Kitchen: kitchenIcon,
    Radio: radioIcon,
    Bathroom: bathroomIcon,
    Refrigerator: refrigeratorIcon,
    Microwave: microwaveIcon,
    Gas: gasIcon,
    Water: waterIcon,
    TV: tvIcon,
  };

  const availableFeatures = [
    { name: 'AC', isAvailable: AC },
    { name: 'TV', isAvailable: TV },
    { name: 'Bathroom', isAvailable: bathroom },
    { name: 'Kitchen', isAvailable: kitchen },
    { name: 'Refrigerator', isAvailable: refrigerator },
    { name: 'Microwave', isAvailable: microwave },
    { name: 'Gas', isAvailable: gas },
    { name: 'Water', isAvailable: water },
    { name: 'Automatic', isAvailable: transmission === 'Automatic' },
    { name: 'Petrol', isAvailable: petrol },
    { name: 'Radio', isAvailable: radio === true }, 
  ].filter((feature) => feature.isAvailable);

  return (
    <div className="camper">

      <img
        src={gallery[0]?.thumb || 'https://via.placeholder.com/150'}
        alt={name}
        style={{
          width: '292px',
          height: '320px',
          borderRadius: '10px',
          objectFit: 'cover',
        }}
      />


      <div className="details-for-camper">
        <div className="label-n-price">
          <h2>{name}</h2>
          <h2 className="price">{price.toLocaleString()}₴</h2>
        </div>


        <div className="rating">
          <div>
            <img src={ratingIcon} width="24" height="24" alt="Rating Icon" />
            <p>
              {rating}/5 ({reviews.length} reviews)
            </p>
          </div>
          <p className="location">Location: {location}</p>
        </div>


        <p className="description">{description}</p>


        <div className="features">
          {availableFeatures.map((feature, index) => (
            <div key={index} className="feature">
              <img
                src={featureIcons[feature.name]}
                alt={feature.name}
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
              <p>{feature.name}</p>
            </div>
          ))}
        </div>


        <button className="show-more-btn" onClick={() => navigate(`/catalog/${camper.id}`)}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Camper;
