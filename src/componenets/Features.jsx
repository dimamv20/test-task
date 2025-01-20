
import '../App.css'

import acIcon from '../icons/svg/ac.svg';
import kitchenIcon from '../icons/svg/kitchen.svg';
import microwaveIcon from '../icons/svg/microwave.svg';
import tvIcon from '../icons/svg/tv.svg';
import bathroomIcon from '../icons/svg/bathroom.svg';
import refrigeratorIcon from '../icons/svg/refrigerator.svg';
import gasIcon from '../icons/svg/gas.svg';
import waterIcon from '../icons/svg/water.svg';
import automaticIcon from '../icons/svg/automatic.svg';
import radioIcon from '../icons/svg/radio.svg';


  
const Features = ({ camper }) => {

  const featureIcons = {
    AC: acIcon,
    TV: tvIcon,
    Bathroom: bathroomIcon,
    Kitchen: kitchenIcon,
    Microwave: microwaveIcon,
    Refrigerator: refrigeratorIcon,
    Gas: gasIcon,
    Water: waterIcon,
    Automatic: automaticIcon,
    Radio: radioIcon,
  };

  const availableFeatures = [
    { name: 'AC', isAvailable: camper.AC },
    { name: 'TV', isAvailable: camper.TV },
    { name: 'Bathroom', isAvailable: camper.bathroom },
    { name: 'Kitchen', isAvailable: camper.kitchen },
    { name: 'Refrigerator', isAvailable: camper.refrigerator },
    { name: 'Microwave', isAvailable: camper.microwave },
    { name: 'Gas', isAvailable: camper.gas },
    { name: 'Water', isAvailable: camper.water },
    { name: 'Automatic', isAvailable: camper.transmission === 'Automatic' },
    { name: 'Radio', isAvailable: camper.radio === true },
  ].filter((feature) => feature.isAvailable);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted', formData);
  };

  return (
    
    <div className="features-booking-container">

        <div className='left-hand-features'>
            <div className="feature-list">
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
            <div className="vehicle-details">
                <h3>Vehicle Details</h3>
                <div className='vehicle-details-list'>
                    <div className="detail-row">
                        <p>Form:</p>
                        <p>{camper.form}</p>
                    </div>
                    <div className="detail-row">
                        <p>Length:</p>
                        <p>{camper.length}</p>
                    </div>
                    <div className="detail-row">
                        <p>Width:</p>
                        <p>{camper.width}</p>
                    </div>
                    <div className="detail-row">
                        <p>Tank:</p>
                        <p>{camper.tank}</p>
                    </div>
                    <div className="detail-row">
                        <p>Consumption:</p>
                        <p>{camper.consumption}</p>
                    </div>
                </div>
            </div>
        </div>
       

      


     
    </div>
  );
};

export default Features;
