import React from "react";
import { tablebg } from "../image";

export function Urldata() {
  const styles = {
    backgroundColor: "#f2f2f2",
    width: "100vw",
  };
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
                  <th scope="col">Shortened url</th>
                  <th scope="col">Date of Creation</th>
                  <th scope="col">Number of Clicks</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
