import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ratingIcon from '../icons/svg/rating.svg';
import Review from './Review';
import Features from './Features';
import BookingCamper from './BookingCamper';
import '../App.css';

const DetailCamper = () => {
    const { id } = useParams();
    const [camper, setCamper] = useState(null);
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        const fetchCamperDetails = async () => {
            try {
                const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
                setCamper(response.data);
            } catch (error) {
                console.error('Error fetching camper details:', error);
            }
        };

        fetchCamperDetails();
    }, [id]);

    if (!camper) return <div>Loading...</div>;

    return (
        <div className="detail-camper">
            <div className="title-n-p-detail-page">
                <h2>{camper.name}</h2>
            </div>
            <div className="rating">
                <div>
                    <img src={ratingIcon} width="24" height="24" alt="Rating Icon" />
                    {camper.rating}/5 ({camper.reviews.length} reviews)
                </div>
                <p className="location">Location: {camper.location}</p>
            </div>
            <h3 className="price">{camper.price.toLocaleString()}₴</h3>
            <div className="gallery">
                {camper.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Camper image ${index + 1}`} />
                ))}
            </div>
            <div>
                <p>Description:</p>
                <p className="description">{camper.description}</p>
            </div>

            <div className="details-container">
                <div className="tabs-content">
                    <div className="tabs">
                        <p onClick={() => setActiveTab('features')} className={activeTab === 'features' ? 'active-tab' : ''}>
                            Features
                        </p>
                        <p onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active-tab' : ''}>
                            Reviews
                        </p>
                    </div>
                    <div className="content">
                        {activeTab === 'features' ? <Features camper={camper} /> : <Review reviews={camper.reviews} />}
                    </div>
                </div>
                <div className="booking-section">
                    <BookingCamper />
                </div>
            </div>
        </div>
    );
};

export default DetailCamper;
