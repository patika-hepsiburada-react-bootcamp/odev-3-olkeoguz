import React, { useState } from 'react';
import { useSurvey } from '../../contexts/SurveyContext';

import Tailwind from '../../Logos/Tailwind';
import Scss from '../../Logos/Scss';
import StyledComponents from '../../Logos/StyledComponents';
import MaterialUI from '../../Logos/MaterialUI';
import Bootstrap from '../../Logos/Bootstrap';

import styles from './Survey.module.css';

const Survey = () => {
  const [answer, setAnswer] = useState();

  const { submitNewResults } = useSurvey();

  const handleChange = (e) => {
    setAnswer(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer) {
      alert('Please select one...');
      return;
    }

    submitNewResults(answer);
  };
  return (
    <div className={styles.surveyContainer}>
      <div className='question'>
        <h3> Which one do you use most often when writing Css?</h3>
      </div>
      <form className='radios' onSubmit={handleSubmit}>
        <label>
          <input
            type='radio'
            id='TailwindCSS'
            checked={answer === 'TailwindCSS'}
            onChange={handleChange}
          />
          <div className={styles.tailwind}>
            <Tailwind />
          </div>
        </label>
        <label>
          <input
            type='radio'
            id='SCSS'
            checked={answer === 'SCSS'}
            onChange={handleChange}
          />
          <div className={styles.scss}>
            <Scss />
          </div>
        </label>
        <label>
          <input
            type='radio'
            id='StyledComponents'
            checked={answer === 'StyledComponents'}
            onChange={handleChange}
          />
          <div className={styles.scss}>
            <StyledComponents />
          </div>
        </label>
        <label>
          <input
            type='radio'
            id='MaterialUI'
            checked={answer === 'MaterialUI'}
            onChange={handleChange}
          />
          <div className={styles.scss}>
            <MaterialUI />
          </div>
        </label>
        <label>
          <input
            type='radio'
            id='Bootstrap'
            checked={answer === 'Bootstrap'}
            onChange={handleChange}
          />
          <div className={styles.scss}>
            <Bootstrap />
          </div>
        </label>
        <div className={styles.btn}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Survey;
