import React, { Component } from "react";
class Sidebar extends Component {
  render() {
    return (
      <div class="side-text-info">
        <h1><b>Amartya Kumar Roy</b></h1>
        <h6>Love what you do,do what you love</h6>
        <div class="social-icons">
        
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
    );
  }
}

export default Sidebar;
