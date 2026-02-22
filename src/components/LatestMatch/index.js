import './index.css'

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
    <div className="latest-match-container">
      <h2 style={{color: '#ff6b35', marginBottom: '20px', textAlign: 'center'}}>
        Latest Match
      </h2>
      <div className="latest-match-content">
        <div className="match-details-left">
          <div>
            <p className="match-detail-label">Team</p>
            <p className="match-detail">{firstInnings}</p>
          </div>
          <div>
            <p className="match-detail-label">Date</p>
            <p className="match-detail">{date}</p>
          </div>
          <div>
            <p className="match-detail-label">Venue</p>
            <p className="match-detail">{venue}</p>
          </div>
          <div>
            <p className="match-detail-label">Umpires</p>
            <p className="match-detail">{umpires}</p>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
          <p className="versus-text">VS</p>
        </div>

        <div className="match-details-right">
          <div>
            <p className="match-detail-label">Team</p>
            <p className="match-detail">{secondInnings}</p>
          </div>
          <div>
            <p className="match-detail-label">Result</p>
            <p className="match-detail">{result}</p>
          </div>
          <div>
            <p className="match-detail-label">Status</p>
            <p className="match-detail">{matchStatus}</p>
          </div>
          <div>
            <p className="match-detail-label">Man of the Match</p>
            <p className="match-detail">{manOfTheMatch}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
