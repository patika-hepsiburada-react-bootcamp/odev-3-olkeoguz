import { createContext, useContext, useEffect, useState } from 'react';
import {
  sendNewResults,
  connectSocket,
  subscribeToResults,
} from '../socket/socketApi';

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

  const submitNewResults = (answer) => {
    const updatedResults = { ...results, [answer]: results[answer] + 1 };
    setResults(updatedResults);
    sendNewResults('new-vote', updatedResults);
  };

  useEffect(() => {
    connectSocket();

    subscribeToResults('new-vote', (res) => {
      console.log('gelen', res);
      setResults(res);
    });
  }, []);

  const values = {
    results,
    setResults,
    submitNewResults,
  };

  return (
    <SurveyContext.Provider value={values}>{children}</SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
