import React from 'react';

function Contact(props) {
  console.log(props)
  return (
    <div className='section-container contact-container' id={props.id}>
      <div className='block-center'>
        <p>Contact Me</p>
      </div>
    </div>
  );
}

export default Contact;