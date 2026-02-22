import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [teamDetails, setTeamDetails] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const getTeamDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const updatedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatch: {
          umpires: data.latest_match_details.umpires,
          result: data.latest_match_details.result,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          date: data.latest_match_details.date,
          venue: data.latest_match_details.venue,
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          firstInnings: data.latest_match_details.first_innings,
          secondInnings: data.latest_match_details.second_innings,
          matchStatus: data.latest_match_details.match_status,
        },
        recentMatches: data.recent_matches.map(each => ({
          id: each.id,
          competingTeam: each.competing_team,
          competingTeamLogo: each.competing_team_logo,
          result: each.result,
          matchStatus: each.match_status,
        })),
      }
      setTeamDetails(updatedData)
      setIsLoading(false)
    }

    getTeamDetails()
  }, [id])

  const {teamBannerUrl, latestMatch, recentMatches} = teamDetails

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <div className="loader-container" data-testid="loader">
          <Loader type="Oval" color="#ff6b35" />
        </div>
      ) : (
        <>
          <img src={teamBannerUrl} alt="team banner" className="team-banner" />
          <LatestMatch latestMatch={latestMatch} />
          <div className="matches-section">
            <ul className="recent-matches-list">
              {recentMatches.map(each => (
                <MatchCard matchDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default TeamMatches
