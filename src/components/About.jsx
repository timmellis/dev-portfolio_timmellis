import React, {useEffect} from 'react';
// import TransitionGroup from 'react-transition-group/TransitionGroup'
import Fade from 'react-reveal/Fade';
import {Row, Col, Container} from 'react-bootstrap'

function About(props) {

  const circus = {
    count: 0, 
    imgs: [require('../assets/Fire-juggling.jpg'), require('../assets/LED-Juggling-Portrait.jpg'), require('../assets/HS-balance.jpg')]
  }
  const circusOver = () => {
    document.querySelector(".circus-img-div").style.opacity=1
    // const loop = () => {
    //   setTimeout(() => document.querySelector(".circus-img-div").style.backgroundImage = `url(${circus.imgs[circus.count%circus.imgs.length]})`, 3000)
    //   circus.count++
    //   loop()
    // }
    // loop()
  }
  const circusSwitch = () => {
    circus.count++
    document.querySelector(".circus-img-div").style
      .backgroundImage=`url(${circus.imgs[circus.count%circus.imgs.length]})`
  }
  const circusOut = () => {
    document.querySelector(".circus-img-div").style.opacity=0
    setTimeout(() => document.querySelector(".circus-img-div").style.backgroundImage = `url(${circus.imgs[circus.count%circus.imgs.length]})`, 500)
    circus.count++
  }
  const circusClick = (e) => {
    e.preventDefault()
    circusOver()
    setTimeout(()=>circusSwitch(),2500)
    setTimeout(()=>circusSwitch(),5000)
    setTimeout(()=>circusOut(),7500)
  }

  return (
    <Container fluid className='section-container about-container' id={props.id} >
      <Row>
        <Fade top>
          <h2>About Me</h2>
        </Fade>
      </Row>

      <Row className='justify-content-center align-items-center about-content-row'>
      {/* <div className='section-block-flex' > */}
        {/* <TransitionGroup> */}

        <Col md={4} sm={12} className='primary-img-col'>
            <Fade left delay='250'>
          <div className='primary-img'>
              <div className='circus-img-div'></div>
              <img id='about-img' src={require('../assets/Agra-India.jpg')} alt='tim in Agra' />
          </div>
            </Fade>
        </Col>
        
        <Col md={8} sm={12} className='about-info'>
          <Fade bottom delay='375'>
            <p>Hello! My name is Tim. I'm a Boston-based <a href="/" class='about-circus-hover' onMouseOver={circusOver} onMouseOut={circusOut} onClick={(e)=>circusClick(e)}>circus and fire arts performer</a> turned full-stack developer. </p>
            <p>&nbsp;</p>
            <p>The pandemic was especially hard on performing artists. So I took it as a sign to finally pursue another one of my passions -- web development. </p> 
            <p>&nbsp;</p>
            <p>As a performer I thrive on creativity and collaboration, and my work in web development is no different. No stranger to creating order out of chaos, I try to always view problems from as many perspectives as possible, and find both creative and elegant solutions that bring joy to the widest audience.  I seek to always do good with the work that I do --- from non-violence and social justice to simple delight and laughter. </p>
          </Fade>
        </Col>
{/* </TransitionGroup> */}

      {/* </div> */}
      </Row>
      </Container>
  );
}

export default About;