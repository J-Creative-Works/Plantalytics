import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../Actions';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username : event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password : event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state)
  }


  render(){
    return (
        <form id="Login" onSubmit={this.handleSubmit}>
          <input className="login-form-info" type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
          <input className="login-form-info" type="password" placeholder="Password " onChange={this.handlePasswordChange} value={this.state.password} />
          <button id="login-form-btn" type="submit">Log In</button>
        </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => {
      dispatch(signIn(user))
    }
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);