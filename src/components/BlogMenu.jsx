import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

function BlogMenu(props) {

  const navigate = useNavigate()

  return (
    <Nav className='flex-column'>
      <h4>Articles:</h4>
      <Nav.Link onClick={()=>navigate('/blog/js-arrays-higher-order-functions')}>
        JavaScript: Array Methods & Higher-Order Functions 
      </Nav.Link>
      <Nav.Link onClick={()=>navigate('/blog/sequelize-express-setup-guide')}>
        Tutorial: Sequelize + Express Setup Guide (PostgreSQL)
      </Nav.Link>
      <Nav.Link onClick={()=>navigate('/blog/simple-jwt-auth-for-django-react-project')}>
        Tutorial: Adding Simple JWT Authorization in Django + React Project 
      </Nav.Link>
    </Nav>
  );
}

export default BlogMenu;