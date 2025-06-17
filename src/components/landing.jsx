import React from 'react'
import '../styles/landing.css'

const Landing = () => {
  return (
    <div className="landing">
        <div className="hero-container">
        <img
            src="./icons_assets/Logo.svg"
            alt="Little Lemon Logo"
            className="logo"
        />
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>
        Little Lemon is a charming neighborhood bistro that serves simple food and
        classic cocktails. We would love to welcome you to our restaurant.
      </p>
        <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="landing-images">
          <img src="./icons_assets/restaurant.jpg" alt="Restaurant" />
        </div>
    </div>
  )
}

export default Landing
