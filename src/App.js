import './App.css';
import { useState } from 'react';
import { Feedback } from './components/feedback';
import { Statistics } from './components/statistics';
import { DisplayAnecdotes } from './components/displayAnecdotes ';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAvarage] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAvarage(average + 1)
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAvarage((average - 1))
  };
  return (
    <div className="App">
      <h1>give feedback</h1>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />   
      <h1>statistics</h1>   
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average / all} positivePercentage={good * 100 / all}/>
      <div>
        <h1>Display Anecdotes</h1>
        <DisplayAnecdotes />
      </div>
    </div>
  );
}

export default App;
