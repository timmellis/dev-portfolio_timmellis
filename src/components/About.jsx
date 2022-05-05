import React, {useEffect} from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Fade from 'react-reveal/Fade';

function About(props) {

  return (
    <div className='section-container about-container' id={props.id} >
      <div className='section-block-flex' >
        
{/* <TransitionGroup> */}
          <Fade left delay='250'>
          <div className='primary-img'>
            <img src={require('../assets/Agra-India.jpg')} alt='tim in Agra' />
          </div>
        </Fade>
        
        <div className='about-info'>
          <Fade bottom delay='375'>
            <h3>About Me</h3>
            <p>Hello! My name is Tim. I'm a Boston-based circus performer turned full-stack developer. </p>
            <p>&nbsp;</p>
            <p>The pandemic was especially hard on performing artists. So I decided to take it as a sign and finally pursue another one of my passions -- web development. </p> 
            <p>&nbsp;</p>
            <p>As a performer I thrive on creativity and collaboration, and my work in web development is no different. No stranger to creating order out of chaos, I try to always view problems from as many perspectives as possible, and find both creative and elegant solutions that bring joy to the widest audience.  I seek to always do good with the work that I do --- from non-violence and social justice to simple delight and laughter. </p>
          </Fade>
        </div>
{/* </TransitionGroup> */}

      </div>
    </div>
  );
}

export default About;