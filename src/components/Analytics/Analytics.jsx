import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import './Analytics.css'

const data = [
  { name: 'New Nana Hostel', rating: 4.5, numRatings: 120 },
  { name: 'Hostel A', rating: 3.8, numRatings: 90 },
  { name: 'Hostel B', rating: 4.2, numRatings: 110 },
  { name: 'Hostel C', rating: 3.7, numRatings: 80 },
  { name: 'Hostel D', rating: 4.0, numRatings: 100 },
  { name: 'Hostel E', rating: 4.1, numRatings: 95 },
  { name: 'Hostel F', rating: 3.5, numRatings: 70 },
  { name: 'Hostel G', rating: 3.9, numRatings: 105 },
  { name: 'Hostel H', rating: 3.6, numRatings: 85 },
];

const Analytics = () => {
  return (
    <div className="Analytics">
      <h3>Hostel Ratings</h3>
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8">
          {data.map((entry, index) => (
            <StarIcon
              key={`star-${index}`}
              style={{ fontSize: '20px', fill: '#FFD700' }}
            />
          ))}
        </Bar>
        <Bar dataKey="numRatings" fill="#82ca9d">
          {data.map((entry, index) => (
            <div key={`people-${index}`}>
              <PeopleIcon style={{ fontSize: '20px', fill: '#5e5e5e' }} />
              {entry.numRatings}
            </div>
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Analytics;
