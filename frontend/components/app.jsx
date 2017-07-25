import React from 'react';
import { Provider } from 'react-redux';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import SongIndexContainer from './song_list/song_index_container';
import SongPageContainer from './song_page/song_page_container';
import ProfileContainer from './profile/profile_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={NavbarContainer} />
    <Route exact path="/" component={HomeContainer} />
    <br /><br /><br />
    <Route path="/" component={AudioPlayerContainer} />
    <Route exact path="/api/songs" component={SongIndexContainer} />
    <Route exact path="/api/songs/:songId" component={SongPageContainer} />
    <Route exact path="/api/users/:userId" component={ProfileContainer} />
  </div>
);

export default App;
