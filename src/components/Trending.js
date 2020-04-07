import React, { Component } from "react";
import trending from "./images/trending.png";
import trending2 from "./images/trending2.png";
import trending3 from "./images/trending3.png";

class Trending extends Component {
  render() {
    return (
      <div>
        <br />
        <h2>Trending Spaces</h2>
        <p>Popular with Hourspace Users</p>
        <div className='row justify-content-around'>
          <div className='col-3'>
            <img className='trendingPicture' src={trending} alt='pic1' />
            <div>PERSON</div>
          </div>
          <div className='col-3'>
            <img className='trendingPicture' src={trending2} alt='pic2' />
            <div>PERSON</div>
          </div>
          <div className='col-3'>
            <img className='trendingPicture' src={trending3} alt='pic3' />
            <div>PERSON</div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Trending;
