import './App.css';
import Chart from './components/Chart';
import Survey from './components/Survey/Survey';
import { SurveyProvider } from './contexts/SurveyContext';

function App() {
  return (
    <SurveyProvider>
      <div className='App'>
        <div className='container'>
          <Chart />
          <Survey />
        </div>
      </div>
    </SurveyProvider>
  );
}

export default App;
