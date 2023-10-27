import React from 'react'
import './StudentReview.css'

import { ReviewsData } from '../../Data/Data';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const StudentReview = () => {
    return (
        <div className="StudentReview">
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
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StudentReview;
