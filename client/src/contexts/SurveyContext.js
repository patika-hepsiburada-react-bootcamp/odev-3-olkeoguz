import { createContext, useContext, useEffect, useState } from 'react';

const SurveyContext = createContext();

export default SurveyContext;


//Starting point of results state
const INITIALRESULTS = {
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
};

export const SurveyProvider = ({ children }) => {
  const [results, setResults] = useState(INITIALRESULTS);

  //Chart state
  const [chartData, setChartData] = useState({
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
  });

  //Whenever results change the chart data changes
  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      datasets: [
        ...prev.datasets,
        {
          ...prev.datasets[0],
          data: [
            results.Monday,
            results.Tuesday,
            results.Wednesday,
            results.Thursday,
            results.Friday,
          ],
        },
      ],
    }));
  }, [results]);

  const values = {
    results,
    setResults,
    chartData,
  };

  return (
    <SurveyContext.Provider value={values}>{children}</SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
