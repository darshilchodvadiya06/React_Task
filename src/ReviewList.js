import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
    if (!reviews) {
        return <div>No reviews available.</div>;
    }

    return (
        <div>
            {reviews.map((review, index) => (
                <ReviewItem key={index} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
