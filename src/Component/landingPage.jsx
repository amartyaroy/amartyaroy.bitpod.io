import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../Images/mypic.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Container fluid className="landing-grid">
          <Row>
            <Col md={12}>
              <img
                alt="amartyaProfile"
                className="profile-img"
                src={image}
              ></img>
              <div className="banner-text">
                <h1>Full Stack Software Developer</h1>
                <hr />
                <p>
                  HTML|CSS|BOOTSTRAP|JAVASCRIPT|REACT|MATERIALIZE|HANDLEBARjs|C#|NODEJS|EXPRESS|MYSQL|DOTNETCORE
                </p>
                <div className="social-links">
                  {/* linkdn */}
                  <a
                    href="https://www.linkedin.com/in/amartyaroy589210150/"
                    target="_blank"
                    alt="linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* facebook */}
                  <a href="/" target="_blank">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  {/* github */}
                  <a href="https://github.com/amartyaroy" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  {/* twitter */}
                  <a href="https://twitter.com/Amartya16614935" target="_blank">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  {/* {Instagram} */}
                  <a href="/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
