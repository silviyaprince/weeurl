import React, { useEffect, useState } from "react";
import { tablebg } from "../image";
import { Link, useNavigate } from "react-router-dom";
import {API} from "./global"

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
      const res=await fetch(`${API}/url/user/all`,{
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
      className
      style={{
        height: "100vh",
        width: "100vw",
        background: 'linear-gradient(to right, #F6D55C, #ED553B)' , 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="   "
        id="tablecontainer"
        style={{ height: "100vh", width: "100%" }}>
        <div className="d-flex flex-column  justify-content-center h-100 mb-3">
          <div className="divclass">
            <h1 className="h1class">Confidently scale and showcase your impact</h1>
            <strong>
            <p className="pclass"><h4>
              🔶Monitor clicks in real-time and understand what’s working sooner
              and avoid making strategic decisions on the fly.
              </h4> </p>
            <p className="pclass"><h4>
              🔶Track and manage your broad range of short links and QR Codes
              across emails, SMS, landing pages, social posts, and prints.
              </h4> </p>
            <p className="pclass"><h4>
              🔶Download charts and graphs directly from the dashboard and save
              time building out stakeholder reports.
              </h4>   </p>
            </strong>
          </div>
          <div className="text-center fs-2" style={{ styles }}>
            <strong>
            Your Url's
            </strong>
          </div>
          <div className="table-responsive" style={{ width: "95%", margin: "0 auto" }}>
            <table className="table table-info table-striped " id="table" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th scope="col">NO.</th>
                  <th scope="col">ORIGINAL URL</th>
                  <th scope="col">SHORTENED URL</th>
                  <th scope="col" style={{width: "200px"}}>DATE OF CREATION</th>
                  <th scope="col" style={{width: "200px"}}>NUMBER OF CLICKS</th>
                 
                </tr>
              </thead>
              <tbody>
              {userdata.map((data,index)=>(
                     <tr>
                     <th scope="row">{index+1}</th>
                    
                    
                     <td>{data.longUrl}</td>
                     <td>{`${API}/url/${data.shortUrl}`}</td>
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
