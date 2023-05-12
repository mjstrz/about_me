import React from 'react';
import Button from 'react-bootstrap/Button';

export default function About() {
    return(
        <section className="container-fluid about-section" id="about-section">
        <h2 className="main--header reveal" id="about-header" href="#about">
          About Me
        </h2>
        {/* <div className='headshot col-4'> */}
        {/* <img src={sobieski} alt="something goes here" id='sobieski' className='col-4'/> */}
        {/* </div> */}
        <div className="row about-info reveal">
          {/* <p className="about-info">
            I'm a dedicated developer who enjoys building high-quality
            responsive web and mobile apps. I recently completed a full-stack
            mobile and web development bootcamp focused on Bootstrap, React JS,
            React Native, Node.js and MongoDB.{" "}
          </p> */}

          <p className="about-info col-12">
            I have 9+ years of professional experience in higher education in
            the U.K. and U.S. As a former teacher, I'm accustomed to working
            with a variety of working styles, and I understand the importance of
            always learning and working in a team. I am detail-oriented, an avid
            learner, and enjoy freelance work while I search for my place in the
            world of web development.{" "}
          </p>

          <p className="about-info col">
            When I'm not coding, I enjoy being on the move, whether it's in the form of cycling, skiing, walking or shuffling. On a rainy day, you can catch me perusing the foreign language category on Netflix. 
          </p>

          {/* <div className="about-button-div align-self-baseline"> */}
  
          {/* </div> */}
        
        </div>
        
        <row class="about-row">
        <a class="btn btn-about col-xs-12 mt-4 reveal" href="#projects">
                    My Experience
              </a>
              </row>
         
      </section>


        


  
    
    )
}