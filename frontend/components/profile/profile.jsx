import React from 'react';
import { Link } from 'react-router-dom';
import UserSongsContainer from './user_songs_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_img: undefined,
      cover_img: undefined,
      description: "",
      username: "",
      id: undefined
    };

    this.renderUserInfo = this.renderUserInfo.bind(this);
    this.renderUserSongs = this.renderUserSongs.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setCoverImage = this.setCoverImage.bind(this);
    this.setProfileImage = this.setProfileImage.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.udpateProfileImage = this.updateProfileImage.bind(this);
    this.updateCoverImage = this.updateCoverImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(parseInt(this.props.match.params.userId)).then(
      () => {
        this.setState({ profile_img: this.props.users[0].profile_img });
        this.setState({ cover_img: this.props.users[0].cover_img });
        this.setState({ description: this.props.users[0].description });
        this.setState({ username: this.props.users[0].username });
        this.setState({ id: this.props.users[0].id });
      }
    );
  }

  setDescription(e) {
    const description = e.target.value ? e.target.value : "";
    this.setState({ description });
  }

  setCoverImage(e) {
    console.log(e.currentTarget.files[0]);
  }

  setProfileImage(e) {
    console.log(e.currentTarget.files[0]);
  }

  updateDescription(e) {
    e.preventDefault();
  }

  updateProfileImage(e) {
    e.preventDefault();
  }

  updateCoverImage(e) {
    e.preventDefault();
  }

  renderUserInfo() {
    if (this.state.id === parseInt(this.props.match.params.userId)) {
      return(
        <div style={{backgroundImage: `url(${this.state.cover_img})`}} className="self-image-container">
          <div className="self-cover-pic"><div className="cameracover"><i className="fa fa-camera"></i></div></div>
          <input onChange={this.setCoverImage} className="hidden-cover-reader" type="file"></input>
          <input onChange={this.setProfileImage} className="hidden-profile-reader" type="file"></input>
          <div style={{backgroundImage: `url(${this.state.profile_img})`}} className="self-profile-pic">
            <div className="cameraprof"><i className="fa fa-camera"></i></div>
          </div>
          <span className="self-profile-username">{this.state.username}</span>
          <textarea onChange={this.setDescription} className="self-profile-description" value={this.state.description}></textarea>
          <span className="pencil-edit"><i className="fa fa-floppy-o"></i></span>
        </div>
      );
    }
    else {
      return(
        <div style={{backgroundImage: `url(${this.state.cover_img})`}} className="image-container">
          <div style={{backgroundImage: `url(${this.state.profile_img})`}} className="profile-pic" />
          <span className="profile-username">{this.state.username}</span>
            <span className="profile-description">{this.state.description}</span>
        </div>
      );
    }
  }

  renderUserSongs() {
    return <UserSongsContainer userId={this.state.id}/>;
  }

  render() {
    return (
      <ul className="profile-container">
        <li className="profile-col-left">&nbsp;</li>
        <center>
          <li className="profile-col-middle">
            {this.state.id ? this.renderUserInfo() : ""}

            <br /><br /><br />

            {this.state.id ? this.renderUserSongs() : ""}
          </li>
        </center>
        <li className="profile-col-right"></li>
      </ul>
    );
  }
}

export default Profile;
