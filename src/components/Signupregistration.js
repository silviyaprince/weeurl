import React from "react";
import { signupbg } from "../image";
export function Signupregistration() {
  return (
    <div
      className=".img-fluid"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${signupbg})`, // Set background image
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Make the image cover the whole viewport
        backgroundPosition: "center", // Center the image
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
            <input type="text" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="Lastname" className="form-label fs-6 fw-bold">
              Last name
            </label>
            <input type="text" className="form-control" id="Lastname" />
          </div>

          <div className="col-md-6">
            <label for="inputEmail4" className="form-label fs-6 fw-bold">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label fs-6 fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label fs-6 fw-bold">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label fs-6 fw-bold">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label fs-6 fw-bold">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label fs-6 fw-bold">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label fs-6 fw-bold">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className=" btn btn-warning">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
