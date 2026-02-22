import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-found-title">404</h1>
    <h2 className="not-found-title">Page Not Found</h2>
    <p className="not-found-message">
      The page you&apos;re looking for doesn&apos;t exist. It might have been
      moved or deleted.
    </p>
    <Link to="/" className="back-link">
      Go Back to Dashboard
    </Link>
  </div>
)
export default NotFound
