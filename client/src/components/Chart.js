import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useSurvey } from '../contexts/SurveyContext';

const Chart = () => {
  const { chartData } = useSurvey();

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
