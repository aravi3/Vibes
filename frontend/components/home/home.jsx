import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongsContainer from './trending_songs_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.openSignupModal = this.openSignupModal.bind(this);
  }

  openSignupModal(e) {
    e.preventDefault();
    window.globalSignupModal();
  }

  render() {
    return (
      <div>
        <div className="hero">
          <h1 className="hero-main">Connect on Vibes</h1>
          <h2 className="hero-sub">Stream and share <br /> music from artists <br /> around the world </h2>
          <Link to="/api/songs" className="hero-button">Start exploring</Link>
        </div>
        <div className="under-top">
          <ul className="home">
            <li className="col-left">&nbsp;</li>
            <li className="col-middle">
              <center>
                <div style={{width: `${screen.width}px`}} className="home-trending-songs">
                  <p className="trending-songs-header">
                    Hear what's trending in the Vibes community
                  </p>
                  <TrendingSongsContainer />
                </div>
              </center>

            </li>
            <li className="col-right">&nbsp;</li>
          </ul>
          <div className="bottom-image">
            <h2 className="bottom-image-sub"><span className="bottom-image-text">Save tracks, <br /> connect with fans, <br /> and share your sounds</span></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
