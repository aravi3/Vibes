import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  setUsername(e) {
    const username = e.target.value ? e.target.value : "";
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value ? e.target.value : "";
    this.setState({ password });
  }

  loginUser() {
    const username = this.state.username;
    const password = this.state.password;

    this.setState({
      username: "",
      password: ""
    });

    const user = {
      username: username,
      password: password
    };

    this.props.login(user);
  }

  render() {

    let errors = this.props.errors.map((err, idx) => {
      return (<p key={`login-errors-${idx}`}>{err}</p>);
    });

    return (
      <div>
        <h1>Sign in</h1>

        <form onSubmit={this.loginUser}>
          <label>Enter your username
            <input onChange={this.setUsername} type="text" value={this.state.username}/>
          </label>

          <label>Enter your password
            <input onChange={this.setPassword} type="password" value={this.state.password}/>
          </label>

          <br />

          <input type="submit"></input>

          {errors}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
