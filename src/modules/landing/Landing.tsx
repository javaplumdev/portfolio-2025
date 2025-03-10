import React from 'react';

import Hero from './Hero';
import About from './About';
import Stats from './Stats';
import Marquee from './Marquee';
import Projects from './Projects';
import Designs from './Designs';
import Contacts from './Contacts';

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Projects />
      <Designs />
      <Contacts />
    </React.Fragment>
  );
};

export default Landing;
