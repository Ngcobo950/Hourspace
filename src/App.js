import React, { Component } from "react";
import "./App.css";
//import bootrap framework resources
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Header from "./components/Header";
import Labels from "./components/Labels";
import Events from "./components/Event";
import Secure from "./components/Secure";
import Trending from "./components/Trending";
import Hourspaces from "./components/Hourspaces";
import Info from "./components/Info";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Labels />
        <Events />
        <Trending />
        <Secure />
        <Hourspaces />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
