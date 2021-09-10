import { StatisticLine } from "./statisticLine"
export const Statistics = ({good, neutral, bad, all, average, positivePercentage}) => {
  if( all === 0 ) {
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          <StatisticLine text="average" value={average} />
        </tr>
        <tr>
          <StatisticLine text="positivePercentage" value={positivePercentage + '%'} />
        </tr>
      </tbody>
    </table>
  );
}