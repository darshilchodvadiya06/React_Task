import React from 'react';

const ReviewItem = ({ review }) => {
    const { title, description, rating } = review;

    const defaultRating = 0;

    return (
        <div className="review-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Rating: {renderStars(rating || defaultRating)}</p>
        </div>
    );
};

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>&#9733;</span>);
        } else {
            stars.push(<span key={i}>&#9734;</span>);
        }
    }
    return stars;
};

export default ReviewItem;
