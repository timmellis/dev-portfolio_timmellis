import React from 'react';
import Footer from './Footer'
import Fade from 'react-reveal/Fade';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {BiMap} from 'react-icons/bi'
import {AiOutlineMail, AiOutlineFile} from 'react-icons/ai'
import {GrDocumentDownload} from 'react-icons/gr'
import {FaFileDownload} from 'react-icons/fa'

function Contact(props) {
  return (
      <Container fluid className='section-container contact-container' id={props.id}>

        <Row className='contact-header-row align-items-center'>
          <Fade top>
            <h2 className='section-title'>Contact</h2>
          </Fade>
        </Row>

        <Row className='align-items-center'>
          <Col className='contact-main-col'>

            <div className='contact-content'>
              <Fade right delay='250'>
                <h2>Tim Ellis</h2>
                <h4 style={{ fontStyle: 'italic' }}><BiMap /> Boston, MA</h4>
                <br />
                <h5>Let's be in touch</h5>
                <p>Looking to hire or collaborate with another developer? I'd love to chat! </p>

                <div>
                  <Button className='resume-view-btn' onClick={()=>window.open(`${process.env.PUBLIC_URL}/Tim_Ellis_Resume_2022.pdf`, '_blank')}><AiOutlineFile /> View Resume</Button>
                  <Button className='resume-btn' onClick={() => window.open('https://docs.google.com/document/d/13vQF1dpcQwVSTBRGJ9xraHSGgh66CSpD-xw5B99Ahmo/export?format=pdf', '_blank')}><FaFileDownload /> Download Resume</Button>
                  <Button className='contact-btn' onClick={() => window.open('mailto:tim.m.ellis@gmail.com', '_blank')}><AiOutlineMail /> Contact</Button>
                </div>

              </Fade>
            </div>

            {/* <Footer /> */}

          </Col>
        </Row>
        <Row>
          <Fade bottom delay='250'>
            <Footer />
          </Fade>
        </Row>
      </Container>
  );
}

export default Contact;