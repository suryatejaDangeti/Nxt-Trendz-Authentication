// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({error: "*Username and Password didn't match"})
    }
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {error} = this.state
    return (
      <div className="login-container">
        <div className="login-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-imgs"
          />
          <label htmlFor="username" className="label-names">
            Username
          </label>
          <input
            className="input-text"
            id="username"
            type="text"
            placeholder="Username"
            onChange={this.enterUsername}
          />
          <label htmlFor="passwordEnter" className="label-names">
            Password
          </label>
          <input
            className="input-text"
            id="passwordEnter"
            type="password"
            placeholder="Password"
            onChange={this.enterPassword}
          />
          <button type="submit" className="submit-button">
            Login
          </button>
          <p className="error-msg">{error}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
