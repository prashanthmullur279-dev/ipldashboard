const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    firstInnings,
    competingTeamLogo,
    secondInnings,
    matchStatus,
  } = latestMatch

  return (
    <div>
      <p>{umpires}</p>
      <p>{result}</p>
      <p>{manOfTheMatch}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{competingTeam}</p>
      <img
  src={competingTeamLogo}
  alt={`latest match ${competingTeam}`}
  className="latest-match-logo"
/>
      <p>{firstInnings}</p>
      <p>{secondInnings}</p>
      <p>{matchStatus}</p>
    </div>
  )
}
export default LatestMatch
