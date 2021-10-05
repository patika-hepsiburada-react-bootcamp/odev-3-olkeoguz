import './App.css';
import Chart from './components/Chart';
import Survey from './components/Survey/Survey';
// import { useSurvey } from './contexts/SurveyContext';
// import { connectSocket, subscribeToResults } from './socket/socketApi';
// import { useEffect } from 'react';

function App() {
  // const { setResults } = useSurvey();

  // useEffect(() => {
  //   connectSocket();
  // }, []);

  // useEffect(() => {
  //   subscribeToResults((results) => {
  //     // console.log('app js ', results);
  //     setResults(results);
  //   });
  //   //eslint-disable-next-line
  // },[]);

  return (
    <div className='App'>
      <div className='container'>
        <Chart />
        <Survey />
      </div>
    </div>
  );
}

export default App;
