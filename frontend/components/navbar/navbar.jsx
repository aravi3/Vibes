import React from 'react';
import SignupModal from '../modal/signup_modal';
import LoginModal from '../modal/login_modal';

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
      username: "Guest",
      password: "demoaccount"
    };

    this.props.login(guest);
  }

  userLoggedOut() {
    return (
      <ul className="main-nav">
        <li>
          <img className="logo" src="assets/logo.png" />
        </li>

        <li className="auth-buttons">
          <button className="nav-button" onClick={this.demoLogin}>Demo Sign In</button>
          <LoginModal />
          <SignupModal />
        </li>
      </ul>
    );
  }

  userLoggedIn() {
    return (
      <ul className="main-nav">
        <li>
          <img className="logo" src="assets/logo.png" />
        </li>

        <li>
          <button className="nav-button">Upload</button>
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
