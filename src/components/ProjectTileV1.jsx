import React from 'react';
import {useNavigate} from 'react-router-dom'

function ProjectTile(props) {

  const navigate = useNavigate();

  const checkImgExists = (path) => {
    try { return require(`../assets/${path}`) } 
     catch (err) { return null }
  }

  return (
    <div className='project-tile'>
    <div className='bg-img' id={props.id}></div>
      <h3>{props.title}</h3>
      {/* {(props.img && checkImgExists(props.img)) && 
        <img src={require(`../assets/${props.img}`)} alt='project demo' />
      } */}
      <div className='project-tile-skills'>
        <div>
          <button onClick={() => navigate(props.url)}></button>
          <button onClick=''></button>
        </div>
        <p> {props.description} </p>
        <div> Skills: &nbsp; 
          {props.skills.map(skill => (
            <div className='skill-tag'>{skill}</div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;