import React from 'react';
import { Provider } from 'react-redux';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={NavbarContainer} />
    <Route exact path="/" component={HomeContainer} />
    <br /><br /><br />
    <Route path="/" component={AudioPlayerContainer} />
  </div>
);

export default App;
