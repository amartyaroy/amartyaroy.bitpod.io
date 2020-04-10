import React, { Component } from "react";
// import {card} from 'react-bootstrap';
import cardImage from "../Images/pic1.png";

export default class Projects extends Component {
    handleDetails=()=>{
        alert("clciked");   
    }
  render() {
    return (
      <div class="project-body">
        <div class="card" style={{ width: "18rem" }}>
          <img src={cardImage}></img>
          <div className="card-body">
            <h3 className="card-title">Project Name</h3>
            <p className="card-text">Project Details</p>
            <a href="https://github.com/amartyaroy" target="_blank">
              Code
            </a>
            
         
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={cardImage}></img>
          <div className="card-body">
            <h3 className="card-title">Project Name</h3>
            <p className="caed-text">Project Details</p>
            <a href="https://github.com/amartyaroy" target="_blank">
              Code
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={cardImage}></img>
          <div className="card-body">
            <h3 className="card-title">Project Name</h3>
            <p className="caed-text">Project Details</p>
            <a href="https://github.com/amartyaroy" target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}
