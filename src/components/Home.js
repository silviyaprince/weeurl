

import { useNavigate } from 'react-router-dom'
import { shortlink } from '../image'
import { w } from '../image'
import React from 'react'

export  function Home() {
  const navigate=useNavigate()
  return (
    <div
      className=".img-fluid"
      style={{
        minHeightheight: "100vh",
        width: "100vw",
        backgroundImage: `url(${w})`, // Set background image
        backgroundSize: "cover", // Make the image cover the whole viewport
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat",
      }}>
    <div className="home-container">
    <div className="content">
      <h1 id="headingcontent" className='fs-1 mb-5'>Wee Url</h1>
      <p className=' lh-base paragraphcontent'>Shorten long, cumbersome URLs into sleek, custom links that are easy to share across platforms and devices.Use our URL shortener to create custom links that simplify your online sharing and enhance user experience.Easily manage and edit your links, all within one platform.</p>
      <div className="buttons-container ">
        <div className='d-flex gap-3'>
        <button id="button" onClick={()=>navigate("/login")}>LOGIN</button>
        <button id="button" onClick={()=>navigate("/urlshortener")}>SHORTEN URL</button>
        <button id="button" onClick={()=>navigate("/urldata")}>URL'S CREATED</button>
        </div>
        <br/>
        <br/>
        <div className='d-flex gap-5 mt-5'>
    <div className="card " style={{width:"18rem",backgroundColor:"#ffc266"}}>
  <div className="card-body">
    <h5 className="card-title">No of url's created per Day</h5>
    <h6 className="card-text mt-3 text-center">34</h6>
   
  </div>
</div>
<div className="card" style={{width:"18rem",height:"7rem", backgroundColor:" #ff99cc"}}>
  <div className="card-body">
    <h5 className="card-title">No of url's created per Day</h5>
    <h6 className="card-text mt-3 text-center">34</h6>
   
  </div>
</div>
    </div>
      </div>
    </div>
    <div className="image-container">
      <img src={shortlink} alt="Your Image Description" />
    </div>
 </div> 
 </div>
 
  )
}

 