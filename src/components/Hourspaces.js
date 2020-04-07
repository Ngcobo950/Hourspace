import React from "react";
import ReactPlayer from "react-player";

const hourspaces = () => {
  return (
    <div>
      <br />
      <h3>Meet Fellow hourspaces</h3>
      <br />
      <div className='row justify-content-around'>
        <div className='col-3'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=Eky_Nhy0XUE'
            width='100%'
            height='100%'
            controls={true}
          />
          <div>
            <p>Hellow welcome to our home</p>
          </div>
        </div>

        <div className='col-3'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=5gWz_1KXhHQ'
            width='100%'
            height='100%'
            controls={true}
          />
          <div>
            <p>Hellow welcome to our home</p>
          </div>
        </div>

        <div className='col-3'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=Ij73eETFhzY'
            width='100%'
            height='100%'
            controls={true}
          />
          <div>
            <p>Hellow welcome to our home</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default hourspaces;
