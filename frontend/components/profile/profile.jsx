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
    if (this.props.users[0].id === parseInt(this.props.match.params.userId)) {
      return(
        <div style={{backgroundImage: `url(${this.props.users[0].cover_img})`}} className="self-image-container">
          <div className="cameracover"><i className="fa fa-camera"></i></div>
          <div className="self-cover-pic"></div>
          <div style={{backgroundImage: `url(${this.props.users[0].profile_img})`}} className="self-profile-pic" />
          <div className="cameraprof"><i className="fa fa-camera"></i></div>
          <span className="self-profile-username">{this.props.users[0].username}</span>
            <span className="self-profile-description">{this.props.users[0].description}</span>
        </div>
      );
    }
    else {
      return(
        <div style={{backgroundImage: `url(${this.props.users[0].cover_img})`}} className="image-container">
          <div style={{backgroundImage: `url(${this.props.users[0].profile_img})`}} className="profile-pic" />
          <span className="profile-username">{this.props.users[0].username}</span>
            <span className="profile-description">{this.props.users[0].description}</span>
        </div>
      );
    }
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
