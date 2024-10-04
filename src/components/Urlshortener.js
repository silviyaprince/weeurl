import React from 'react';
import { linkshortener } from '../image';

export  function Urlshortener() {
  const styles={
    backgroundColor:"#57868e",
    minHeight:"100vh",
  }
  return (
    <div style={styles}>
   <div className='urlcontainer ' >
    <h2 className='fs-1  text-white mb-5' style={{backgroundColor:"#57868e"}} id="urlheadingcontent"  >Wee Url</h2>
    <h3 className='text-center fs-1' style={{color:"#aeebf7"}}>Create links that perform with our powerful URL Shortener</h3>
    <p className='text-center fs-2' style={{color:"#aeebf7"}}>Spark instant connections with your audience using trimmed, trustworthy, and trackable links within the WeeUrl Connections Platform.</p>
     <br/>
     <br/>
     <form className="d-flex p-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Place your long URL here..." aria-label="Search"/>
        <button className="btn btn-outline-warning fs-5 fw-bolder" type="submit">Shorten Link</button>
      </form>
      <br/>
      <br/>
     <div className='d-flex container flex-wrap gap-2 mb-5' id="urlshortenercontent" style={{backgroundColor:"#57868e",minHeight:"40vh",minWidth:"100vW"}}>
      <div style={{ flex:'1 ' }} >
      <h4 className='' style={{color:"#ffffff",marginBottom:"30px"}}>TAILORED LINKS</h4>
      <h2 style={{ color:"#ffff4d" ,marginBottom:"40px"}}>Create branded short links that build trust</h2>
      <p className='lh-base fs-5'style={{color:"#ffff80"}} >🔶 Build strong brand credibility by customizing your links with our trusted link shortener.</p>
      <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶 Activate brand recall effortlessly with custom links that your audience recognizes in seconds. </p>
      <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶 Drive higher click-through rates and more engagement with a custom domain that’s unique to your brand.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}> 🔶 Attract more clicks with polished short links that inspire confidence.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶Observe click statistics and collect real-time data from every click.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶Gather demographic insights with robust location and device data.</p>
      </div>
      <div className='position-relative' id="urlshortenerimage" style={{ minwidth:"300px" }}>
        <img className="img-fluid  " src={linkshortener} style={{width:"100%",height:"auto"}} alt="linkshort"/>
      </div>
</div>
   </div>
   </div>
  )
}
