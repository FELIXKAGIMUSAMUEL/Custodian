import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const colors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1', '#4D4D4D', '#FFD700', '#FA8072'];

const Graph = () => {
  
  const ChartTitle = [
    {name:'Hostels'}
  ];

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '<i>New-Nana</i> in comparison with other hostels',
    },
    xAxis: {
      categories: ChartTitle.map((data) => data.name),
    },
    yAxis: {
      title: {
        text: 'Rating',
      },
      max: 5,
    },
    tooltip: {
      pointFormat: 'Hostel: <b>{point.series.name}<br/>Rating:</b> <b>{point.y}</b><br/>Number of Ratings: <b>{point.numPeopleRated}</b>',
    },
    plotOptions: {
      column: {
        colorByPoint: true,
      pointPadding: 0.2, // Adjust the space between bars within a group
      groupPadding: 0.0, // Adjust the space between groups of bars
      },
    },
    series: [
      {
        name: 'New-Nana Hostel',
        data: [{ y: 4.5, numPeopleRated: 50, color: colors[0] }],
      },
      {
        name: 'Kasamba Hostel',
        data: [{ y: 3.8, numPeopleRated: 70, color: colors[1] }],
      },
      {
        name: 'Olympia Hostel',
        data: [{ y: 4.2, numPeopleRated: 110, color: colors[2] }],
      },
      {
        name: 'Helican Hostel',
        data: [{ y: 3.7, numPeopleRated: 80, color: colors[3] }],
      },
      {
        name: 'Nalikka Hostel',
        data: [{ y: 4.0, numPeopleRated: 100, color: colors[4] }],
      },
      {
        name: 'Aryan Hostel',
        data: [{ y: 4.1, numPeopleRated: 95, color: colors[5] }],
      },
      {
        name: 'Maimood Hostel',
        data: [{ y: 3.5, numPeopleRated: 70, color: colors[6] }],
      },
      {
        name: 'Mulago View Hostel',
        data: [{ y: 3.9, numPeopleRated: 105, color: colors[7] }],
      },
      {
        name: 'JJ Hostel',
        data: [{ y: 4.2, numPeopleRated: 85, color: colors[8] }],
      },
      {
        name: 'Nakiyingi Hostel',
        data: [{ y: 4.3, numPeopleRated: 115, color: colors[9] }],
      },
      {
        name: 'JB Hostel',
        data: [{ y: 3.9, numPeopleRated: 75, color: colors[10] }],
      },
      {
        name: 'Braeted Hostel',
        data: [{ y: 4.4, numPeopleRated: 125, color: colors[11] }],
      },
      {
        name: 'God-Is-Able',
        data: [{ y: 3.3, numPeopleRated: 65, color: colors[12] }],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact className="analytics-container" highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;
