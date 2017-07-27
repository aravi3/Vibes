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
    this.updateDescription = this.updateDescription.bind(this);
    this.updateProfileImage = this.updateProfileImage.bind(this);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(parseInt(nextProps.match.params.userId)).then(
        () => {
          this.setState({ profile_img: nextProps.users[0].profile_img });
          this.setState({ cover_img: nextProps.users[0].cover_img });
          this.setState({ description: nextProps.users[0].description });
          this.setState({ username: nextProps.users[0].username });
          this.setState({ id: nextProps.users[0].id });
        }
      );
    }
  }

  setDescription(e) {
    const description = e.target.value ? e.target.value : "";
    this.setState({ description });
  }

  updateDescription(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("user[profile_img]", this.state.profile_img);
    formData.append("user[cover_img]", this.state.cover_img);
    formData.append("user[description]", this.state.description);

    this.props.editUser(formData, this.state.id);
  }

  updateCoverImage(e) {
    e.preventDefault();
    const cover_img = e.currentTarget.files[0];
    this.setState({ cover_img });

    setTimeout(() => {
      var formData = new FormData();
      formData.append("user[profile_img]", this.state.profile_img);
      formData.append("user[cover_img]", this.state.cover_img);
      formData.append("user[description]", this.state.description);

      this.props.editUser(formData, this.state.id);
    }, 0);
  }

  updateProfileImage(e) {
    e.preventDefault();
    const profile_img = e.currentTarget.files[0];
    this.setState({ profile_img });

    setTimeout(() => {
      var formData = new FormData();
      formData.append("user[profile_img]", this.state.profile_img);
      formData.append("user[cover_img]", this.state.cover_img);
      formData.append("user[description]", this.state.description);

      this.props.editUser(formData, this.state.id);
    }, 0);
  }

  renderUserInfo() {
    if (this.props.currentUser.id === parseInt(this.props.match.params.userId)) {
      return(
        <div style={{backgroundImage: `url(${this.props.users[0].cover_img})`}} className="self-image-container">
          <div className="self-cover-pic"><div className="cameracover"><i className="fa fa-camera"></i></div></div>
          <input onChange={this.updateCoverImage} className="hidden-cover-reader" type="file"></input>
          <input onChange={this.updateProfileImage} className="hidden-profile-reader" type="file"></input>
          <div style={{backgroundImage: `url(${this.props.users[0].profile_img})`}} className="self-profile-pic">
            <div className="cameraprof"><i className="fa fa-camera"></i></div>
          </div>
          <span className="self-profile-username">{this.props.users[0].username}</span>
          <textarea onChange={this.setDescription} className="self-profile-description" value={this.state.description}></textarea>
          <span onClick={this.updateDescription} className="pencil-edit"><i className="fa fa-floppy-o"></i></span>
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
    return <UserSongsContainer userId={this.props.users[0].id}/>;
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
