import React from "react";

const secure = () => {
  return (
    <div className='secure'>
      <div className='head-text'>
        <br />
        <br />
        <h2>100% Secured and Protected</h2>
        <p>Trust and Safety is our #1 Priority at Hourspace</p>
        <br />
      </div>
      <div className='row justify-content-around'>
        <div className='col-3' style={{ border: "solid green 1px" }}>
          <h4>Looking for Space</h4>
          <li>Secure Merchant Transaction</li>
          <li>Authenticated Hosts</li>
          <li>Direct Messaging with Hosts</li>
          <li>Host Profile and Reviews</li>
        </div>
        <div className='col-3' style={{ border: "solid green 1px" }}>
          <h4>Hosting Out a Space</h4>
          <li>R1,000,000 Insurance Coverage</li>
          <li>Booking Management Platform Flexible</li>
          <li>Cancellation and Deposit Policies</li>
          <li>24/7 Customer Support Team</li>
        </div>
      </div>
      <br />
    </div>
  );
};

export default secure;
