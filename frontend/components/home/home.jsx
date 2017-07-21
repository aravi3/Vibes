import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongsContainer from './trending_songs_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="home">
        <li className="col-left">&nbsp;</li>
        <li className="col-middle">
          <div className="hero">
            <h1 className="hero-main">Connect on Vibes</h1>
            <h2 className="hero-sub">Stream and share <br /> music from artists <br /> around the world </h2>
            <button className="hero-button">Start exploring</button>
          </div>
          <br /><br /><br />
          <center>
            <TrendingSongsContainer />
          </center>
        </li>
        <li className="col-right">&nbsp;</li>
      </ul>
    );
  }
}

export default Home;
