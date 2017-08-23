import React from 'react';
import SignupModal from '../modal/signup_modal';
import LoginModal from '../modal/login_modal';
import UploadModal from '../modal/upload_modal';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.signupForm = this.signupForm.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.userLoggedOut = this.userLoggedOut.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.props.history.push('/api/search');
    }

    if (nextProps.query === "" && this.props.query !== "") {
      this.props.history.goBack();
    }
  }

  setSearch(e) {
    const search = e.target.value ? e.target.value : "";
    this.setState({ search });
    setTimeout(() => this.props.receiveSearch(this.state.search), 0);
  }

  logoutUser() {
    this.props.logout();
  }

  signupForm() {
    this.props.history.push('/signup');
  }

  loginForm() {
    this.props.history.push('/login');
  }

  demoLogin() {
    const guest1 = {
      email: "guest@demo.com",
      username: "GuestUser",
      password: "demoaccount"
    };

    const guest2 = {
      email: "guest2@demo.com",
      username: "GuestUser2",
      password: "demoaccount2"
    };

    const guest3 = {
      email: "guest3@demo.com",
      username: "GuestUser3",
      password: "demoaccount3"
    };

    const guest4 = {
      email: "guest4@demo.com",
      username: "GuestUser4",
      password: "demoaccount4"
    };

    const guest5 = {
      email: "guest5@demo.com",
      username: "GuestUser5",
      password: "demoaccount5"
    };

    const guestArray = [guest1, guest2, guest3, guest4, guest5];
    const rand = guestArray[Math.floor(Math.random() * guestArray.length)];
    this.props.login(rand).then(this.redirectHome);
  }

  redirectHome() {
    this.props.history.push('/');
  }

  userLoggedOut() {
    return (
      <ul className="main-nav">
        <li>
          <img onClick={this.redirectHome} className="logo" src="https://res.cloudinary.com/dnj5rmvun/image/upload/v1501127917/logo_blackground_e7wfgu.png" alt="logo"/>
        </li>

        <li>
          <label className="search-bar"><i className="fa fa-search"></i>
            &nbsp;&nbsp;&nbsp;
            <input className="search-text" onChange={this.setSearch} placeholder="search" type="text" value={this.state.search}></input>
          </label>
        </li>

        <li className="auth-buttons">
          <button className="nav-button" onClick={this.demoLogin}>Demo Sign In</button>
          <Link to="/api/songs" className="nav-button">Discover</Link>
          <LoginModal clearErrors={this.props.clearErrors}/>
          <SignupModal clearErrors={this.props.clearErrors}/>
          <a href='https://www.linkedin.com/in/arvind-ravi/' className="nav-button last-button">About</a>
        </li>
      </ul>
    );
  }

  userLoggedIn() {
    return (
      <ul className="main-nav">
        <li>
          <img onClick={this.redirectHome} className="logo" src="https://res.cloudinary.com/dnj5rmvun/image/upload/v1501127917/logo_blackground_e7wfgu.png" alt="logo"/>
        </li>

        <li>
          <label className="search-bar"><i className="fa fa-search"></i>
            &nbsp;&nbsp;&nbsp;
            <input className="search-text" onChange={this.setSearch} placeholder="search" type="text" value={this.state.search}></input>
          </label>
        </li>

        <li className="auth-buttons">
          <Link to={`/api/users/${this.props.currentUser.id}`} className="nav-button">{this.props.currentUser.username}</Link>
          <Link to="/api/songs" className="nav-button">Discover</Link>
          <UploadModal clearErrors={this.props.clearErrors}/>
          <button className="nav-button" onClick={this.logoutUser}>Log Out</button>
          <a href='https://www.linkedin.com/in/arvind-ravi-1a6b75ab' className="nav-button last-button">About</a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? this.userLoggedIn() : this.userLoggedOut()}
      </div>
    );
  }
}

export default withRouter(Navbar);
