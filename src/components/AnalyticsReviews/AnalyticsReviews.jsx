import React from 'react'
import './AnalyticsReviews.css'

import { ReviewsData } from '../../Data/Data';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const AnalyticsReviews = () => {
    return (
        <div className="AnalyticsReviews">
            {ReviewsData.map((review, id) => {
                return (
                    <div key={id} className="review">
                        <div className="avatar">{review.icon}</div>
                        <div className="info">
                            <div className="name">{review.name}</div>
                            <div className="rating">
                                <Rating name={`rating-${id}`} value={review.rating} readOnly />
                            </div>
                            <div className="comment">{review.comment}</div>
                            <hr />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AnalyticsReviews;
