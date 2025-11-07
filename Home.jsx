
import { useState } from 'react'
import profile from '../Images/profile.jpg' 

function Home() {
  const [showBio, setShowBio] = useState(false)

  return (
    <div className="section home container">
      <div className="home-content">
        <div className="profile-circle">
          <img src={profile} alt="Profile" />
        </div>

        <div className="card info-card">
          <h2>Rappah-Elzion F. Bauyon</h2>
          <p className="info-item">Birthdate: May 04, 2004</p>
          <p className="info-item">Occupation: Working Student</p>
          <button className="btn see-more-btn" onClick={() => setShowBio(!showBio)}>
            See More
          </button>
        </div>
      
        {showBio && (
          <div className="card bio-card">
            <h3>Bio</h3>
            <p className="lead">
            “In a world driven by data and code, curiosity is your greatest algorithm.”
            </p>
          </div>
        )}

        <div className="card badges-card">
          <div className="badges-container">
            <span className="badge">Councilor</span>
            <span className="badge">Musician</span>
            <span className="badge">Explorer</span>
          </div>
        </div>

        <div className="card cta-row">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Home


