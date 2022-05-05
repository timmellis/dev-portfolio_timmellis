import React from 'react';
import { navigate, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


const iama = "Javascript programmer • Juggler • Problem solver • Team player • React developer • Circus performer • mySQL programmer • Puzzle solver • MongoDB developer • Pacifist and non-violence advocate • Cooperative gamer • SQL programmer • Bird watcher • Database programmer • Food lover • Debugger • Social justice advocate • Collaborator • Acrobat • Spreadsheet enthusiast • Vue developer • Fire artist • Posgres developer • Team leader • Teacher • PHP programmer • Writer • Node.js developer • Musician and singer • Python programmer • WordPress website manager • CSS3 designer • Dog lover"

function Home(props) {


  return (
    <div className='section-container home-container' id='home'>
      <div className='block-center'>
        <Fade bottom delay='50'>
          <h3>Hi. I'm</h3>
        </Fade>
        <Fade bottom delay='150'>
          {/* <h5>My name is</h5> */}
          <h1>Tim.</h1>
        </Fade>
        <Fade bottom delay='250'>
          <h4>I am a</h4>
        </Fade>        
        {/* <h5>circus performer turned</h5> */}
        
        <Fade bottom delay='350' duration='1500'>
        <div className='iama-container'>
            <div className='iama'>Junior Full-Stack Developer</div>
          <div className='iama-list' id='iama-list'>
            <div>{iama} • {iama} • {iama} • {iama}</div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;