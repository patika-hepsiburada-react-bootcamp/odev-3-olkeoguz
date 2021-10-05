import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useSurvey } from '../contexts/SurveyContext';

const Chart = () => {
  const { results } = useSurvey();

  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Favorite day',
        data: [
          results.Monday,
          results.Tuesday,
          results.Wednesday,
          results.Thursday,
          results.Friday,
        ],
        backgroundColor: [
          'rgba(75,192,192,0.6)',
          'red',
          'blue',
          'orange',
          'green',
        ],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'Favorite day', display: true },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
