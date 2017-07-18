import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.signupForm = this.signupForm.bind(this);
    this.loginForm = this.loginForm.bind(this);
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

  render() {
    return (
      <ul className="main-nav">
        <li>
        </li>

        <li>
          <button onClick={this.signupForm}>Sign in</button>
          <button onClick={this.loginForm}>Create account</button>
        </li>
      </ul>
    );
  }
}

export default Navbar;
