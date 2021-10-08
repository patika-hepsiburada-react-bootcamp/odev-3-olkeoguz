import './App.css';
import Header from './components/Header';
import Chart from './components/Chart/Chart';
import Survey from './components/Survey/Survey';

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <div className='container'>
          <Survey />
          <Chart />
        </div>
      </div>
    </>
  );
}

export default App;
