import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamcarditem: []}

  componentDidMount() {
    this.getTeamcards()
  }

  getTeamcards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formatteddata = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isLoading: false, teamcarditem: formatteddata})
  }

  render() {
    const {teamcarditem, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ff6b35" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {teamcarditem.map(each => (
              <TeamCard key={each.id} teamdetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
