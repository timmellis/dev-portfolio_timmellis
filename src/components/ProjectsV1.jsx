import React from 'react';
import ProjectTile from './ProjectTile'
import Fade from 'react-reveal/Fade';

function Projects(props) {

  const projects = [
    // *** MAKE SURE IMAGE NAME MATCHES THE FILENAME IN ASSETS FOLDER ***

    // 1: GAME OF SET
    {
      id: 'proj-set-game',
      title: 'The Game of Set',
      description: 'Classic card game Set, fully playable, with added features, built entirely with Javascript and CSS.',
      img: 'game-of-Set.jpg',
      skills: ['html','css','javascript','GSAP plugin'], 
      url: 'https://tellis-thegameofset.surge.sh/',
      repoUrl: 'https://github.com/timmellis/The_Game_of_Set' 
    },
    // 2: PERSONALIZED BIRD-WATCHING TRACKER
    {
      id: 'proj-birding-tracker',
      title: 'Personal Birding Tracker',
      description: 'Personal tracking app to cross reference bird-watching locations with sightings in each location.', 
      img: 'img-url.jpg',
      skills: ['html','css','js','react','express','node','mongodb','mongoose','heroku'],
      url: 'https://apricot-sundae-10390.herokuapp.com/',
      repoUrl: 'https://github.com/timmellis/Personal-Birding-Tracker' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: 'A food-themed Instagram clone for sharing food glamour shots.', 
      img: 'img-url.jpg',
      skills: ['none'],
      url: '',
      repoUrl: '' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: 'A food-themed Instagram clone for sharing food glamour shots.', 
      img: 'img-url.jpg',
      skills: ['none'],
      url: '',
      repoUrl: '' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: 'A food-themed Instagram clone for sharing food glamour shots.', 
      img: 'img-url.jpg',
      skills: ['none'],
      url: '',
      repoUrl: '' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: 'A food-themed Instagram clone for sharing food glamour shots.', 
      img: 'img-url.jpg',
      skills: ['none'],
      url: '',
      repoUrl: '' 
    },
    // 3: FOODLE (Food-themed Instagram Clone)
    {
      id: 'proj-foodle',
      title: 'Project Foodle',
      description: 'A food-themed Instagram clone for sharing food glamour shots.', 
      img: 'img-url.jpg',
      skills: ['none'],
      url: '',
      repoUrl: '' 
    },
  ]


  return (
    <div className='section-container projects-container' id={props.id}>
        <Fade left>
        <h2>Projects</h2>
        </Fade>
        

        <div className='section-block-grid'>

        {projects.map((project, i) => (
        <Fade bottom delay={i*100 + 250}>
          <ProjectTile 
          key={i}
          id={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
          skills={project.skills}
          />
      </Fade>
          ))}

      </div>
    </div>
  );
}

export default Projects;