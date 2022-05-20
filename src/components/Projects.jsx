import React from 'react';
import ProjectTile from './ProjectTile'
import Fade from 'react-reveal/Fade';
import {Row, Col, Container} from 'react-bootstrap'

function Projects(props) {

  const projects = [
    // *** MAKE SURE IMAGE NAME MATCHES THE FILENAME IN ASSETS FOLDER ***

    // 1: GAME OF SET
    {
      id: 'proj-set-game',
      title: 'The Game of Set',
      description: 'The classic card game "Set". Fully playable, built entirely with Javascript, CSS and HTML. After building out the project, I added a number of additional automated features not typically found in the real game, including: difficulty level selection, score keeping, a "Sets found" tracker, and computer-generated hints.',
      summary: `Interactive game built using only HTML, CSS and Javascript.`,
      img: 'game-of-Set.jpg',
      skills: ['html','css','javascript','GSAP plugin'], 
      url: 'https://tellis-thegameofset.surge.sh/',
      github: 'https://github.com/timmellis/The_Game_of_Set' 
    },
    // 2: PERSONALIZED BIRD-WATCHING TRACKER
    {
      id: 'proj-birding-tracker',
      title: 'Personal Birding Tracker',
      description: `I took up bird watching in 2020, which inspired this personal tracking app used to cross-reference my local parks and other bird-watching hotspots against my sightings of different species in each location. (Yes, I'm a bird nerd).`,
      summary: `React web application, using Express and Mongoose to build and connect to a MongoDB database.`, 
      img: 'img-url.jpg',
      skills: ['html','css','js','react','express','node','mongodb','mongoose','heroku'],
      url: 'https://apricot-sundae-10390.herokuapp.com/',
      github: 'https://github.com/timmellis/Personal-Birding-Tracker' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: `A food-themed Instagram clone for sharing food glamour shots! This application was built as part of a group project during the General Assembly: Software Engineering Intensive in 2022. `, 
      summary: 'A Ful-stack web application built with React, using Express and Postgres to build and connect to a pSQL database using Json Web Token authorization.',
      img: 'foodle.jpg',
      skills: ['html','css','js','react','express','node','postgres','psql','jwt'],
      url: 'https://ancient-forest-25395.herokuapp.com/',
      github: 'https://github.com/timmellis/Foodle-Back' 
    },

  ]


  return (
    <Container fluid className='section-container projects-container' id={props.id}>
      <Row>
        <Fade left exit>
        <h2>Projects</h2>
        </Fade>
      </Row>
      
        {projects.map((project, i) => (
        <Row>
          <Fade bottom delay={i*100 + 250}>
            <ProjectTile 
            key={i}
            id={project.id}
            title={project.title}
            description={project.description}
            summary={project.summary}
            img={project.img}
            skills={project.skills}
            url={project.url}
            github={project.github}
            />
          </Fade>
        </Row>
          ))}
    </Container>
  );
}

export default Projects;