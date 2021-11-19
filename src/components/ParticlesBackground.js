import React from "react";
import ParticlesConfig from "../config/particles-config";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <div>
      <Particles style={{position:'relative',zIndex:'-1'}} params={ParticlesConfig} />
    </div>
  );
}

export default ParticlesBackground;
