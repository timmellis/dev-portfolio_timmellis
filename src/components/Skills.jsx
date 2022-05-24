import React from 'react';
import Fade from 'react-reveal/Fade';
import {Row, Col, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import {DiJavascript, DiHtml5, DiCss3, DiPython, DiPhp, DiReact, DiDjango, DiNodejsSmall, DiPostgresql} from 'react-icons/di'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaVuejs} from 'react-icons/fa'
import {SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiReact, SiDjango, SiNodedotjs, SiPostgresql, SiMongodb, SiMysql, SiSequelize, SiBootstrap, SiJquery, SiJson, SiJsonwebtokens} from 'react-icons/si'
import {VscJson} from 'react-icons/vsc'

function Skills(props) {
  return (
    <Container fluid className='section-container skills-container' id={props.id} >
      <Row>
        <Fade top>
          <h2 className='section-title'>Skills</h2>
        </Fade>
      </Row>

      <Container fluid>
      <Row className='justify-content-center align-items-top'>
     
        <Col md={4} sm={12} className='skills-info'>
            <Fade top delay='125' cascade>
              <ListGroup>
                <ListGroup.Item className='list-header'>Languages</ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiJavascript /> &nbsp;
                  Javascript
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiHtml5 /> &nbsp;
                  HTML5
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiCss3 /> &nbsp;
                  CSS3
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiPython /> &nbsp;
                  Python
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <AiOutlineConsoleSql /> &nbsp;
                  SQL
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiPhp /> &nbsp;
                  PHP
                </ListGroup.Item>
              </ListGroup>
            </Fade>
        </Col>
        
        <Col md={4} sm={12} className='skills-info'>
          <Fade left delay='250'>
          <ListGroup>
                <ListGroup.Item className='list-header'>Frameworks</ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiReact />&nbsp; 
                  React.js
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <FaVuejs />&nbsp;
                  Vue.js
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiDjango /> &nbsp;
                  Django
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiNodedotjs />&nbsp;
                  Node
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>

                  Express
                </ListGroup.Item>
              </ListGroup>
          </Fade>
        </Col>
        <Col md={4} sm={12} className='skills-info'>
          <Fade left delay='375'>
          <ListGroup>
                <ListGroup.Item className='list-header'>Databases
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiPostgresql />&nbsp;
                  PostgreSQL
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiMongodb />&nbsp;
                  MongoDB
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiMysql />&nbsp;
                  MySQL
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiSequelize />&nbsp;
                  Sequelize(ORM)
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  Mongoose(ODM)
                </ListGroup.Item>
              </ListGroup>
          </Fade>
        </Col>
        </Row>

        <Row className='justify-content-center align-items-top'>
        <Col md={4} sm={12} className='skills-info'>
          <Fade left delay='500'>
          <ListGroup>
                <ListGroup.Item className='list-header'>Libraries
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  Axios
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiBootstrap />&nbsp;
                  Bootstrap
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiJquery />&nbsp;
                  jQuery
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  GSAP
                </ListGroup.Item>
                {/* <ListGroup.Item className='list-item'>
                </ListGroup.Item> */}
              </ListGroup>
          </Fade>
        </Col>
        <Col md={4} sm={12} className='skills-info'>
          <Fade left delay='625'>
          <ListGroup>
                <ListGroup.Item className='list-header'>Other</ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  Agile/Scrum
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <VscJson /> &nbsp;
                  JSON APIs
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  RESTful routing
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  <SiJsonwebtokens /> &nbsp;
                  JSON Web Tokens (JWT)
                </ListGroup.Item>
                <ListGroup.Item className='list-item'>
                  ERD Mapping
                </ListGroup.Item>
              </ListGroup>
          </Fade>
        </Col>

      </Row>
      </Container>
      
      </Container>
  );
}

export default Skills;