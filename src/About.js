import { Component } from "react";
// import Container from "react-bootstrap/Container";
import './App.css';
import Venator from "./VenatorSD.jpg"

class About extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${Venator})`, height: "992px"}} className="center">
      <div id="aboutStyle">
        <h1>Meet the Developer</h1>
        <h3>Mason Whitaker</h3>
        </div>
      </div>
    )
  }
};

export default About;
