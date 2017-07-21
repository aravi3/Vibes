import React from 'react';
import SignupModal from '../modal/signup_modal';
import LoginModal from '../modal/login_modal';
import UploadModal from '../modal/upload_modal';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.signupForm = this.signupForm.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.userLoggedOut = this.userLoggedOut.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
    const guest = {
      email: "guest@demo.com",
      username: "GuestUser",
      password: "demoaccount"
    };

    this.props.login(guest);
  }

  userLoggedOut() {
    return (
      <ul className="main-nav">
        <li>
          <img className="logo" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500532501/logo_mtsa6u.png" alt="logo"/>
        </li>

        <li className="auth-buttons">
          <button className="nav-button" onClick={this.demoLogin}>Demo Sign In</button>
          <LoginModal clearErrors={this.props.clearErrors}/>
          <SignupModal clearErrors={this.props.clearErrors}/>
        </li>
      </ul>
    );
  }

  userLoggedIn() {
    return (
      <ul className="main-nav">
        <li>
          <img className="logo" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500532501/logo_mtsa6u.png" alt="logo"/>
        </li>

        <li className="auth-buttons">
          <Link to={`/api/users/${this.props.currentUser.id}`} className="nav-button">{this.props.currentUser.username}</Link>
          <UploadModal clearErrors={this.props.clearErrors}/>
          <button className="nav-button last-button" onClick={this.logoutUser}>Log Out</button>
        </li>
      </ul>
    );
  }

  render() {
    return this.props.loggedIn ? this.userLoggedIn() : this.userLoggedOut();
  }
}

export default Navbar;
