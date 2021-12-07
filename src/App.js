import React from 'react';
import profil from './img/profil.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import About from './components/1-About/About'
import Experience from './components/2-Experience/Experience'
import Education from './components/3-Education/Education'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profil} alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link js-scroll-trigger">A Propos</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link js-scroll-trigger">Expérience</Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link js-scroll-trigger">Formation</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (

    <div>
      <Router>
        <Nav />
        <div className="container-fluid p-0">
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          </Switch>
        </div>
      </Router>
    </div>

  )
}
export default App;
