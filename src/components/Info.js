import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className='information' style={{ backgroundColor: "#4A4A4A" }}>
        <br />
        <div className='row justify-content-around'>
          <div className='col-3'>
            <h5 style={{ color: "green" }}>Hourspace</h5>
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cancellation Policy</li>
              <li>Space Use Agreement</li>
            </ul>
          </div>
          <div className='col-3'>
            <h5 style={{ color: "green" }}>Discover Spaces</h5>
            <ul>
              <li>How it Works</li>
              <li>List your Space</li>
              <li>Help Centre</li>
              <li>Privacy Policy</li>
              <li>Press</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className='col-3'>
            <h5 style={{ color: "green" }}>Connect</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
