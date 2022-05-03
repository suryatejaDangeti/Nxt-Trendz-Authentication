// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="home-container">
          <div className="inner-home">
            <h1 className="home-heading">Clothes That Get You Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-small-img"
            />
            <p className="home-paragraph">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes always been a marker of a era and
              we are in a revolution. Your fashion makes you been seen and heard
              that the way you are.So, celebrate the seasons new and exciting
              fashion in your own way.
            </p>
            <button type="button" className="home-btn">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-large-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
