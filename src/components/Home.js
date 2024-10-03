

import { useNavigate } from 'react-router-dom'
import { shortlink } from '../image'
import React from 'react'

export  function Home() {
  const navigate=useNavigate()
  return (
    <div className="home-container">
    <div className="content">
      <h1 id="headingcontent" className='fs-1 mb-5'>Wee Url</h1>
      <p className=' lh-base paragraphcontent'>Shorten long, cumbersome URLs into sleek, custom links that are easy to share across platforms and devices.Use our URL shortener to create custom links that simplify your online sharing and enhance user experience.Easily manage and edit your links, all within one platform.</p>
      <div className="buttons-container">
        <button onClick={()=>navigate("/login")}>LOGIN</button>
        <button onClick={()=>navigate("/urlshortener")}>SHORTEN URL</button>
        <button>URL'S CREATED</button>
      </div>
    </div>
    <div className="image-container">
      <img src={shortlink} alt="Your Image Description" />
    </div>
    </div> 
  )
}

 