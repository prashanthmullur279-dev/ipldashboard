const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  return (
    <li>
      {
        <li>
          <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
          <p>{competingTeam}</p>
          <p>{result}</p>
          <p>{matchStatus}</p>
        </li>
      }
    </li>
  )
}

export default MatchCard
