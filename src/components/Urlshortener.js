import React from 'react';
import { linkshortener } from '../image';
import { useState } from 'react';
export  function Urlshortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const styles={
    backgroundColor:"#57868e",
    minHeight:"100vh",
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error before submitting
  
    console.log('Submitting:', { longUrl });
  
    try {
      const token = localStorage.getItem("token");
      console.log("Token in localStorage:", token); 
      const response = await fetch('http://localhost:8030/url/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "x-auth-token":token,
        },
        body: JSON.stringify({ longUrl }), // Check this matches the backend expectations
      });

      console.log('Response:', response);
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData); // Log the error message
        throw new Error('Failed to create short URL');
      }
  
      const data = await response.json();
      console.log('Success response:', data); // Log success data
      setShortUrl(data.data.shortUrl); // Update shortUrl with the response
    } catch (err) {
      console.error('Error creating short URL:', err); // Log the error object
      setError('Failed to create short URL. Please try again.');
    }
  };
  


  return (
    <div style={styles}>
   <div className='urlcontainer ' >
    <h2 className='fs-1  text-white mb-5' style={{backgroundColor:"#57868e"}} id="urlheadingcontent"  >Wee Url</h2>
    <h3 className='text-center fs-1' style={{color:"#aeebf7"}}>Create links that perform with our powerful URL Shortener</h3>
    <p className='text-center fs-2' style={{color:"#aeebf7"}}>Spark instant connections with your audience using trimmed, trustworthy, and trackable links within the WeeUrl Connections Platform.</p>
     <br/>
     <br/>
     <form onSubmit={handleSubmit} className="d-flex p-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Place your long URL here..." aria-label="Search" value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)} />
        <button className="btn btn-outline-warning fs-5 fw-bolder" >Shorten Link</button>
      </form>
      {error && <p className="text-danger text-center">{error}</p>}
      <br/>
      <br/>
      {shortUrl && (
          <div className="card mt-4">
            <div className="card-header">Your Short URL</div>
            <div className="card-body">
              <h5 className="card-title">Shortened Link</h5>
              <p className="card-text">
                <a href={`http://localhost:8030/url/${shortUrl}`} target="_blank" rel="noopener noreferrer">
                http://localhost:8030/url/{shortUrl}                </a>
              </p>
            </div>
          </div>
        )}
     <div className='d-flex container  flex-wrap gap-2 mb-5' id="urlshortenercontent" style={{backgroundColor:"#57868e",minHeight:"40vh",minWidth:"100vW"}}>
      <div    className='col-sm-12 col-xl-6' style={{ flex:'1 ' }} >
      <h4 className='' style={{color:"#ffffff",marginBottom:"30px"}}>TAILORED LINKS</h4>
      <h2 style={{ color:"#ffff4d" ,marginBottom:"40px"}}>Create branded short links that build trust</h2>
      <p className='lh-base fs-5'style={{color:"#ffff80"}} >🔶 Build strong brand credibility by customizing your links with our trusted link shortener.</p>
      <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶 Activate brand recall effortlessly with custom links that your audience recognizes in seconds. </p>
      <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶 Drive higher click-through rates and more engagement with a custom domain that’s unique to your brand.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}> 🔶 Attract more clicks with polished short links that inspire confidence.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶Observe click statistics and collect real-time data from every click.</p>
    <p className='lh-base fs-5' style={{color:"#ffff80"}}>🔶Gather demographic insights with robust location and device data.</p>
      </div>
      <div className=' col-sm-12 col-xl-6 ' id="urlshortenerimage" >
        <img className="img-fluid mt-5 " src={linkshortener} style={{width:"100%",height:"auto"}} alt="linkshort"/>
      </div>
</div>
   </div>
   </div>
  )
}
