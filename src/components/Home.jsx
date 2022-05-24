import React from 'react';
import { navigate, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from 'react-bootstrap'


const iama = "Javascript programmer • Juggler • Front-end developer • Problem solver • Team player • React.js developer • Circus performer • mySQL programmer • Puzzle solver • MongoDB developer • Pacifist and non-violence advocate • Cooperative gamer • SQL programmer • Bird watcher • Database programmer • Food lover • Debugger • Social justice advocate • Collaborator • WordPress website manager • Acrobat • Spreadsheet enthusiast • Vue.js developer • Fire artist • Posgres developer • Team leader • Teacher • PHP programmer • Writer • Node.js developer • Musician and singer • Python programmer • Crossword puzzle enthusiast • CSS3 designer • Dog lover • Back-end developer"

function Home(props) {


  return (
    <Container fluid className='section-container home-container'  id={props.id}>
      <Row className='justify-content-center align-items-center' style={{height:'100vh'}}>

      <div className='block-center home-block-center block-shift-by-nav'>
        <Fade bottom delay='50'>
          <h3>Hello there. I'm</h3>
        </Fade>
        <Fade bottom delay='150'>
          <h1>Tim Ellis.</h1>
        </Fade>
        <Fade bottom delay='250'>
          <h4>I am a</h4>
        </Fade>        
        
        <Fade bottom delay='350' duration='1500'>
        <div className='iama-container'>
          <div className='iama'>Full-Stack Developer</div>
          <div className='iama-list' id='iama-list'>
            {/* <div>{iama} • {iama} • {iama} • {iama}</div> */}
            <div className='scroll1'> {iama} </div>
            <div className='scroll2'> {iama} </div>
          </div>
        </div>
        </Fade>
      </div>
      </Row>
    </Container>
  );
}

export default Home;