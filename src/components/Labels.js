import React, { Component } from "react";
import bg2 from "./images/bg2.png";

export class Labels extends Component {
  render() {
    return (
      <div className='labelBg' style={{ backgroundImage: `url(${bg2})` }}>
        <br />
        <h1> Find a Space</h1>
        <h3> Discover & Book a Space for Your Next Event</h3>

        <form className='myForms'>
          <label>
            <br />

            <input type='text' name='name' />
          </label>
          <label>
            <br />

            <input type='text' name='name' />
          </label>
          <input type='Submit' value='Search' />
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Labels;
