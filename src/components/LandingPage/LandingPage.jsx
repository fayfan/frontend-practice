import { NavLink } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <main id="landing-page">
      <div>
        <h1>Projects</h1>
        <ul>
          <li>
            <NavLink to="/bonsai">Bonsai - Pricing Page</NavLink>
          </li>
          <li>
            <NavLink to="/starbucks">Starbucks - Rewards Page</NavLink>
          </li>
          <li>
            <NavLink to="/stark">Stark - Library Page</NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default LandingPage;
