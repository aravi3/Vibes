import React from 'react';
import { Link } from 'react-router-dom';
import UserSongsContainer from './user_songs_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.renderUserInfo = this.renderUserInfo.bind(this);
    this.renderUserSongs = this.renderUserSongs.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(parseInt(this.props.match.params.userId));
  }

  renderUserInfo() {
    return(
      <div style={{backgroundImage: `url(${this.props.users[0].cover_img})`}} className="image-container">
        <div style={{backgroundImage: `url(${this.props.users[0].profile_img})`}} className="profile-pic" />
        <span className="profile-username">{this.props.users[0].username}</span>
          <span className="profile-description">{this.props.users[0].description}</span>
      </div>
    );
  }

  renderUserSongs() {
    return <UserSongsContainer userId={parseInt(this.props.match.params.userId)}/>;
  }

  render() {
    return (
      <ul className="profile-container">
        <li className="profile-col-left">&nbsp;</li>
        <center>
          <li className="profile-col-middle">
            {this.props.users[0] ? this.renderUserInfo() : ""}

            <br /><br /><br />

            {this.props.users[0] ? this.renderUserSongs() : ""}
          </li>
        </center>
        <li className="profile-col-right"></li>
      </ul>
    );
  }
}

export default Profile;
