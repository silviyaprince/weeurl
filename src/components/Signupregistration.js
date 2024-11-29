import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupbg } from "../image";
import { API } from "./global";
export function Signupregistration() {
  const navigate=useNavigate()
  const[firstname,setFirstname]=useState("")
  const[lastname,setLastname]=useState("")

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [err,setErr]=useState("")


  const handleSignup=async(e)=>{
    e.preventDefault();
      const payload={
          firstname,
          lastname,
          email,
          password
      }
      console.log("Payload being sent:", payload);
      try{
      const res=await fetch(`${API}/user/signupregistration`,{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "Content-type":"application/json"
          }
      })
      const data=await res.json()
      console.log("Response data:", data);
      if (res.ok) {
        // Show success message to user
        alert("Signup successful! Please check your email to activate your account.");
        setErr(""); 
      } else {
        // Display error message from backend
        setErr(data.error || "An error occurred during signup.");
      }
    } catch(error) {
      console.error("Error during signup:", error);
      setErr("An unexpected error occurred. Please try again.");
    }
}
  return (
    <div
      className=".img-fluid"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${signupbg})`, 
        backgroundAttachment: "fixed", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container  text-white text-bold " id="registercontainer">
        <h4 className="text-center fs-3 fw-bold mb-5" id="signuph4">
          REGISTER
        </h4>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="Firstname" className="form-label fs-6 fw-bold">
              First name
            </label>
            <input type="text" className="form-control" id="inputPassword4" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label for="Lastname" className="form-label fs-6 fw-bold">
              Last name
            </label>
            <input type="text" className="form-control" id="Lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputEmail4" className="form-label fs-6 fw-bold">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label fs-6 fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className=" btn btn-warning" onClick={handleSignup}>
              REGISTER
            </button>
          </div>
        </form>
        {err && <div style={{ color: "black", marginTop: "10px",fontSize:"40px" ,textAlign:"center"}}>{err}</div>}

      </div>
    </div>
  );
}
