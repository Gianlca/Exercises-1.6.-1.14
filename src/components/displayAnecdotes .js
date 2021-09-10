import { useState } from "react";
import { Button } from "./button";

export const DisplayAnecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleRandomNumber = () => {
    const number = getRandomIntInclusive(0, anecdotes.length - 1 );
    setSelected(number); 
  }
  
  const handleVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVote(votesCopy);
    const mostVoted = Math.max(...votesCopy);
    const indexMostVoted = votesCopy.indexOf(mostVoted);
    setMostVoted(indexMostVoted);
  }
  
  return (
    <div>
      <div>{anecdotes[selected]} votes: {votes[selected]}</div>
      <Button onClick={handleVotes} text="vote" />
      <Button onClick={handleRandomNumber} text="next anecdotes" />
      <h1>Anecdotes with most vote</h1>
      <div>{anecdotes[mostVoted]}</div>
    </div>
  );
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}