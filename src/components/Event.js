import React, { Component } from "react";
import cpt from "./images/cpt.png";
import gt from "./images/gt.png";
import dbn from "./images/dbn.png";
import list1 from "./images/list.png";
import list2 from "./images/list2.png";
import list3 from "./images/list3.png";
import list4 from "./images/list4.png";
import list5 from "./images/list5.png";
import list6 from "./images/list6.png";

export class Event extends Component {
  render() {
    return (
      <div className='eventSection'>
        <h2>Where are you planning your event </h2>
        <p>Discover & Book a Space for Your Next Event</p>
        <div className='myEvents'>
          <img className='eventPicture' src={cpt} alt='cpt' />
          <img className='eventPicture' src={gt} alt='gt' />
          <img className='eventPicture' src={dbn} alt='dbn' />
        </div>

        <h2>Our Curated List </h2>
        <p>Some of our favourite collections</p>
        <div className='myList'>
          <img className='listPicture' src={list1} alt='list' />
          <img className='listPicture' src={list2} alt='list2' />
          <img className='listPicture' src={list3} alt='list3' />
          <img className='listPicture' src={list4} alt='list4' />
          <img className='listPicture' src={list5} alt='list5' />
          <img className='listPicture' src={list6} alt='list6' />
        </div>
      </div>
    );
  }
}

export default Event;
