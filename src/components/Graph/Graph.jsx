import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Rating: ${payload[0].value}`}</p>
        <p>{`Number of Ratings: ${payload[0].payload.numPeopleRated}`}</p>
      </div>
    );
  }

  return null;
};

const Analytics = () => {
  const hostelData = [
    { name: 'New-Nana', rating: 4.5, numPeopleRated: 50 },
    { name: 'Mish', rating: 3.8, numPeopleRated: 70 },
    { name: 'Mulago-view', rating: 4.2, numPeopleRated: 110 },
    { name: 'Olympia', rating: 3.7, numPeopleRated: 80 },
    { name: 'Nalikka', rating: 4.0, numPeopleRated: 100 },
    { name: 'Aryan', rating: 4.1, numPeopleRated: 95 },
    { name: 'Maimood', rating: 3.5, numPeopleRated: 70 },
    { name: 'Kasamba', rating: 3.9, numPeopleRated: 105 },
    { name: 'Braetd', rating: 3.6, numPeopleRated: 85 },
    { name: 'Olympia', rating: 4.3, numPeopleRated: 115 },
    { name: 'Dreamworld', rating: 3.4, numPeopleRated: 75 },
    { name: 'JB', rating: 3.4, numPeopleRated: 75 },
    { name: 'JJ', rating: 4.4, numPeopleRated: 125 },
    { name: 'God is Able', rating: 4.6, numPeopleRated: 65 },
  ];

  return (
    <div>
      <h2>Hostel Ratings</h2>
      <BarChart
        width={700} // Adjusted width (120% of original 600)
        height={400}
        data={hostelData}
        margin={{ top: 5, right: 0, left: 5, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[0, 5]} /> {/* Set maximum value to 5 */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="rating" fill="#308ce9" label={{ position: 'top' }} />
      </BarChart>
    </div>
  );
};

export default Analytics;
