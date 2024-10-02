

import { shortlink } from '../image'
import React from 'react'

export  function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="headingcontent">Welcome to Our Platform</h1>
        <p className='paragraphcontent'>Shorten long, cumbersome URLs into sleek, custom links that are easy to share across platforms and devices.Use our URL shortener to create custom links that simplify your online sharing and enhance user experience.Easily manage and edit your links, all within one platform.</p>
        <div className="buttons-container">
          <button>Get Started</button>
          <button>Learn More</button>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="image-container">
        <img src={shortlink} alt="Your Image Description" />
      </div>
    </div>
  )
}

