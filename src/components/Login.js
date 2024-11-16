import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { weeurllogo } from "../image";
import { wallpaper } from "../image";
export function Login() {
 
  const colors = {
    borderColor: "#ff9999",
  };
  const navigate=useNavigate()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [err,setErr]=useState("")


  const handleLogin=async()=>{
      const payload={
          email,
          password
      }

      const res=await fetch(`${API}/user/login`,{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "Content-type":"application/json"
          }
      })
      const data=await res.json()
      if(data.token){
          setErr("")
          localStorage.setItem("token",data.token)
          navigate("/")
      }else{
          setErr(data.error)
      }
  }
  return (
    <div
      className=".img-fluid"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${wallpaper})`, // Set background image
        backgroundSize: "cover", // Make the image cover the whole viewport
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="  container d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}>
        <div
          className="box bg-white border  p-4 custom-box w-100"
          style={colors}>
          <img
            src={weeurllogo}
            alt="companylogo"
            className="d-block mx-auto img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="text-center text-dark fs-3 fw-bold">
            Sign in to your account
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="form-floating mt-3 mb-3">
                <input
                  type="email"
                  className="form-control /"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating ">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <Link
                href="/forgot-password"
                className="forgot-password-link float-end">
                Forgot password?
              </Link>
              <div className="text-center  mt-5   ">
                <button type="button" className="btn btn-primary me-2">
                  SUBMIT
                </button>
                <p className="mt-4 fs-5">
                  Not a member?
                  <h6
                    className="d-inline text-primary"
                    onClick={() => navigate("/signupregistration")}>
                    REGISTER NOW
                  </h6>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
