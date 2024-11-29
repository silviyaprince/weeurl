import React, { useState,useEffect } from 'react';
import { useParams ,useNavigate} from "react-router-dom";
import { API } from "./global";

export function Resetpassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [tokenValid, setTokenValid] = useState(false); 
const navigate=useNavigate()
  useEffect(() => {
    
    if (token) {
      fetch(`${API}/user/resetpassword/${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Token valid. You can now reset your password.") {
            setTokenValid(true);
          } else {
            setMessage("Invalid or expired token.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setMessage("An error occurred while verifying the token.");
        });
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${API}/user/resetpassword/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        navigate("/");
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };


  return (
    <div className="forgotpassword" style={{ position: "relative" }}>
      <div className="card border border-5" id="pass" style={{ width: "28rem", height: "38rem", position: "absolute", top: "90%", left: "50%", transform: 'translate(-50%, 50%)' }}>
        <img src="https://media.istockphoto.com/id/1500914761/vector/fitness-health-gym-trendy-icons-on-circles.jpg?s=612x612&w=0&k=20&c=MaSBJ-edgZ2Nm7utjZgYupCWAzhrcIek0Udz48L_JME=" alt="IMG" style={{ width: '100px', height: '100px', margin: 'auto' }} />
        <p className="card-text" id="pass2">Reset your password</p>
        <p className="card-text" id="pass2">Enter a new password for your account</p>

        <div className="card-body d-grid gap-2">
        {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}> 
            <input
              className="form-control me-2"
              type="password"
              placeholder="New password"
              aria-label="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              className="form-control me-2"
              type="password"
              placeholder="Confirm password"
              aria-label="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
             
            <div className="d-grid gap-2 col-12 mx-auto mt-5">
              <button className="btn btn-primary" type="submit">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
