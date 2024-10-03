import React from 'react';
import { linkshortener } from '../image';

export  function Urlshortener() {
  const styles={
    backgroundColor:"#57868e",
    minHeight:"100vh",
  }
  return (
   <div className='urlcontainer ' style={styles}>
    <h2 className='fs-1  text-white mb-5' style={{backgroundColor:"#57868e"}} id="urlheadingcontent"  >Wee Url</h2>
    <h3 className='text-center fs-1' style={{color:"#aeebf7"}}>Create links that perform with our powerful URL Shortener</h3>
    <p className='text-center fs-3' style={{color:"#aeebf7"}}>Spark instant connections with your audience using trimmed, trustworthy, and trackable links within the WeeUrl Connections Platform.</p>
     <br/>
     <br/>
     <form className="d-flex p-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Place your long URL here..." aria-label="Search"/>
        <button className="btn btn-outline-warning fs-5 fw-bolder" type="submit">Shorten Link</button>
      </form>
      <br/>
      <br/>
     <div className='d-flex justify-content-around'>
      <div>
      <h4 className='' style={{color:"#f3db81"}}>TAILORED LINKS</h4>
      <p className=' lh-base paragraphcontent'>Shorten long, cumbersome URLs into sleek, custom links that are easy to share across platforms and devices.Use our URL shortener to create custom links that simplify your online sharing and enhance user experience.Easily manage and edit your links, all within one platform.</p>
      </div>
      <div>
        <img src={linkshortener} alt="linkshort"/>
      </div>
</div>
   </div>
  )
}
{/* <div className="modal" tabindex="-1">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Modal title</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div> */}