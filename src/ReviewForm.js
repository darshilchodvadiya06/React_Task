import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ addReview }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        addReview({ title, description, rating });
        setTitle('');
        setDescription('');
        setRating(0);
    };

    const handleReset = () => {
        setTitle('');
        setDescription('');
        setRating(0);
    };

    return (
        <center>
            <form className="form-container" onSubmit={handleSubmit}>
                <h1 className='head'>Review Application</h1>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Review Title"
                    required
                />
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                    min="1"
                    max="5"
                    step="1"
                    placeholder="Rating (0-5)"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write your review..."
                    required
                />
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </center>
    );
};

export default ReviewForm;
