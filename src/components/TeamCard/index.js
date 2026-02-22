import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamdetails} = props
  const {teamImageUrl, name, id} = teamdetails
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div>
          <img src={teamImageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
