import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongsContainer from './trending_songs_container';
import SignupModal from '../modal/signup_modal';
import UploadModal from '../modal/upload_modal';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.openSignupModal = this.openSignupModal.bind(this);
    <SignupModal />;
    <UploadModal />;
  }

  openSignupModal(e) {
    e.preventDefault();
    window.globalSignupModal();
  }

  render() {
    return (
      <ul className="home">
        <li className="col-left">&nbsp;</li>
        <li className="col-middle">
          <div className="hero">
            <h1 className="hero-main">Connect on Vibes</h1>
            <h2 className="hero-sub">Stream and share <br /> music from artists <br /> around the world </h2>
            <Link to="/api/songs" className="hero-button">Start exploring</Link>
          </div>
          <br /><br /><br />
          <center>
            <p className="trending-songs-header">
              Hear what's trending in the Vibes community
            </p>

            <br /><br /><br />

            <TrendingSongsContainer />
          </center>

          <br />

          <div className="bottom-image">
            <h2 className="bottom-image-sub">Save tracks, <br /> connect with fans, <br /> and share your sounds</h2>
            <button onClick={this.openSignupModal} className="bottom-image-button">Create account</button>
          </div>
        </li>
        <li className="col-right">&nbsp;</li>
      </ul>
    );
  }
}

export default Home;
