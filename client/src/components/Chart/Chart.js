import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useSurvey } from '../../contexts/SurveyContext';
import styles from './Chart.module.css';

const Chart = () => {
  const { results } = useSurvey();

  const chartData = {
    labels: ['Tailwind CSS', 'SCSS', 'Styled Components', 'Material UI', 'Bootstrap'],
    datasets: [
      {
        label: 'Favorite Css Framework || Preprocessors',
        data: [
          results.TailwindCSS,
          results.SCSS,
          results.StyledComponents,
          results.MaterialUI,
          results.Bootstrap,
        ],
        backgroundColor: [
          'rgba(75,192,192,0.6)',
          '#BF4080',
          '#F6B54F',
          '#0078F2',
          '#7952B3',
        ],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className={styles.barContainer}>
      <Bar
        className={styles.bar}
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
  );
};

export default Chart;
