import React from 'react'
import '../RightSide/RightSide.css'
import StudentReview from '../StudentReview/StudentReview'

const AnalyticsRightSide = () => {
    return (
        <div className="RightSide">
            <h3>Student Reviews</h3>
            <StudentReview />
        </div>
    )
}

export default AnalyticsRightSide
