import React from 'react';
import '../App.css';

const Review = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="review-header">
            <div className="review-initial">
              {review?.reviewer_name ? review.reviewer_name.charAt(0) : 'N'}
            </div>
            <h4>{review?.reviewer_name || 'Anonymous'}</h4>
            <span className="review-rating">
              {'⭐'.repeat(review?.reviewer_rating || 0)} ({review?.reviewer_rating || '0'})
            </span>
          </div>
          <p>{review?.comment || 'No comment provided.'}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
