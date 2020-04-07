import React, { Component } from "react";
import logo from "./images/logo.png";

export class Header extends Component {
  render() {
    return (
      <header className='headerBg'>
        <img className='logoPicture' src={logo} alt='logo' />

        <div className='group'>
          <input className='group1' type='text' required />
          <span className='highlight'></span>
          <span class='bar'></span>
        </div>
      </header>
    );
  }
}

export default Header;
