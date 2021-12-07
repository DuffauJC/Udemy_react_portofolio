import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  const [state, setState] = useState({
    first: 'Clarence',
    last: 'Taylors',
    address: `Route de la Boulette · Toulouse ·`,
    email: 'jcd@email.com',
    bio: `Après 16 ans dans la logistique, mes formations m'ont confirmé dans ma
          reconversion.
          Maitrise de Javascript, HTML et CSS.
          En effet je sais faire une application web avec React.js.`,
    socials: {
      facebook: 'https://www.facebook.com',
      github: 'https://github.com/DuffauJC',
      linkedin: 'https://www.linkedin.com',
    }
  })
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{state.first}
            <span className="text-primary"> {state.last}</span>
          </h1>
          <div className="subheading mb-5">{state.address}
            <Link to="mailto:name@email.com">{state.email}</Link>
          </div>
          <p className="lead mb-5">{state.bio}</p>
          <div className="social-icons">
            <Link to={state.socials.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to={state.socials.github}>
              <i className="fab fa-github"></i>
            </Link>
            <Link to={state.socials.facebook}>
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
