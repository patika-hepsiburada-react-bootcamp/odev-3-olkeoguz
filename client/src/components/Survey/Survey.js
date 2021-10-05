import React, { useState } from 'react';
import { useSurvey } from '../../contexts/SurveyContext';

const Survey = () => {
  const [answer, setAnswer] = useState();

  const { setResults } = useSurvey();

  const handleChange = (e) => {
    setAnswer(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer) {
      alert('Please choose a day...');
      return;
    }

    setResults((prev) => ({ ...prev, [answer]: prev[answer] + 1 }));
  };
  return (
    <div>
      <div className='question'>
        <p>What is your favorite day of the week?</p>
      </div>
      <form className='radios' onSubmit={handleSubmit}>
        <label>
          <input
            type='checkbox'
            id='Monday'
            checked={answer === 'Monday'}
            onChange={handleChange}
          />
          Monday
        </label>
        <label>
          <input
            type='checkbox'
            id='Tuesday'
            checked={answer === 'Tuesday'}
            onChange={handleChange}
          />
          Tuesday
        </label>
        <label>
          <input
            type='checkbox'
            id='Wednesday'
            checked={answer === 'Wednesday'}
            onChange={handleChange}
          />
          Wednesday
        </label>
        <label>
          <input
            type='checkbox'
            id='Thursday'
            checked={answer === 'Thursday'}
            onChange={handleChange}
          />
          Thursday
        </label>
        <label>
          <input
            type='checkbox'
            id='Friday'
            checked={answer === 'Friday'}
            onChange={handleChange}
          />
          Friday
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Survey;
