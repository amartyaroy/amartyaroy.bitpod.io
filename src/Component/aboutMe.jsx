import React, { Component } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import {Container,Row,Col} from 'react-bootstrap';
import image from "../Images/mypic.png";
import ParticleContainer from "./ParticleContainer";
import Sidebar from './sideBar';

// import {Paper,Tab,Tabs} from 'react-mdl';
export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  toggleCategory = () => {
    if (this.state.activeTab === 0) {
      return (
        <div class="about-me-text" style={{ position: "relative" }}>
          <div style={{position:'absolute'}}>
            <p>
              Hi! I'm currently an undergraduate, studying Computer Science at
              Sikkim Manipal Institute of Technology. Working as a software
              developer at Pune. Love to create things,passionate about
              technology always want to deep dive into the world of computer. I
              love building things and is a curious learner. Time management is
              what I think one should learn helps me a lot. Also at leisure time
              I write some poems and love playing PC games.
             
            </p>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <div>this is my Education</div>;
    } else if (this.state.activeTab === 2) {
      return <div>this is work</div>;
    }
  };

  render() {
    let handleChange = (event, id) => {
      console.log(id);
      this.setState({ activeTab: id });
    };
    return (
      <div>
        <Paper className="toggle-category">
          <Tabs
            onChange={handleChange}
            activeTab={this.state.activeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About Me" />
            <Tab label="Education" />
            <Tab label="Work" />
          </Tabs>
        </Paper>
        {/* <ParticleContainer /> */}
       
        {/* <section class="aboutMe-grid"> */}
        <Container fluid>
            <Row>
                <Col lg={7} md={6} sm={12} style={{width:'100%', height:'100%'}}>
                   <ParticleContainer/>
                   <Sidebar/>

                </Col>
                <Col lg={5} md={6} sm={12}>
                    {this.toggleCategory()}
                </Col>
            </Row>
          </Container>
        {/* </section> */}
      </div>
    );
  }
}
