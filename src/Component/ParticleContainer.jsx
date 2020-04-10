import React, { Component,Fragment } from "react";
import Particles from "react-particles-js";

export default class ParticleContainer extends Component {
  render() {
    return (
    
       
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#ebdada",
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  //color: "#f7e8f0",
                },
                polygon: {
                  nb_sides: 12,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 1,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 2,
                color: "#ffffff",
                opacity: 0.3,
                width: 0.4,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "windows",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 300,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 600,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 10,
                },
                remove: {
                  particles_nb: 10,
                },
              },
            },
            retina_detect: true,
          }}
        />
    
    );
  }
}
