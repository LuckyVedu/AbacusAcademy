import React from 'react'
import Header from './Nav'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './Home.css'
  
const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined){
    return <Redirect to='/login'/>

    
  }
  return (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Choose the Course what you like</h1>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Browse Course
        </button>
      </div>
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)}

export default Home
