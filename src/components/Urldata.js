import React, { useEffect, useState } from "react";
import { tablebg } from "../image";
import { Link, useNavigate } from "react-router-dom";

export function Urldata() {
  const styles = {
    backgroundColor: "#f2f2f2",
    width: "100vw",
  };
const navigate=useNavigate()
const [userdata,setUserData]=useState([])
  const [error,setError]=useState("")

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
    let token=localStorage.getItem("token")
    const fetchUserData=async()=>{
      const res=await fetch("http://localhost:8030/url/user/all",{
      method:"GET",
      headers:{
        "x-auth-token":token,
      },
        
    })
   const data=await res.json()
   console.log(data)
   if(!data.data){
    setError(data.error)
   }else{
   setUserData(data.data)
   }
  }
   fetchUserData()
  },[])


  return (
    <div
      className=".img-fluid"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${tablebg})`, // Set background image
        backgroundSize: "cover", // Make the image cover the whole viewport
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="container   "
        id="tablecontainer"
        style={{ height: "100vh", width: "100%" }}>
        <div className="d-flex flex-column  justify-content-center h-100 mb-3">
          <div>
            <h2>Confidently scale and showcase your impact</h2>
            <p>
              🔶Monitor clicks in real-time and understand what’s working sooner
              and avoid making strategic decisions on the fly.
            </p>
            <p>
              🔶Track and manage your broad range of short links and QR Codes
              across emails, SMS, landing pages, social posts, and prints.
            </p>
            <p>
              🔶Download charts and graphs directly from the dashboard and save
              time building out stakeholder reports.
            </p>
          </div>
          <div className="text-center" style={{ styles }}>
            gggg
          </div>
          <div>
            <table className="table table-info table-striped " id="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Original url</th>
                  <th scope="col">Sholrtened url</th>
                  <th scope="col">Date of Creation</th>
                  <th scope="col">Number of Clicks</th>
                 
                </tr>
              </thead>
              <tbody>
              {userdata.map((data,index)=>(
                     <tr>
                     <th scope="row">{index+1}</th>
                    
                    
                     <td>{data.longUrl}</td>
                     <td>http://localhost:8030/url/{data.shortUrl}</td>
                     <td>{data.date}</td>
                     <td>{data.clickCount}</td>
                   </tr>
                  ))}
               
                
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
