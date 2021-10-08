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
  TailwindCSS: 0,
  SCSS: 0,
  StyledComponents: 0,
  MaterialUI: 0,
  Bootstrap: 0,
};

export const SurveyProvider = ({ children }) => {
  const [results, setResults] = useState(INITIALRESULTS);

  const submitNewResults = (answer) => {
    const updatedResults = { ...results, [answer]: results[answer] + 1 };
    setResults(updatedResults);
    // send the new results to server
    sendNewResults('new-vote', updatedResults);
  };

  useEffect(() => {
    connectSocket();

    // get the latest results when the user first visits the page
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
