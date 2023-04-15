import React from 'react';
import Button from 'react-bootstrap/Button';

export default function About() {
    return(
        <section className="about-section">
        <h2 className="main--header reveal" id="about-header" href="#about">
          About Me
        </h2>
        <div className="row about-divider">
          {/* <hr class="divider divider-light" /> */}
        </div>
        {/* <div className='headshot col-4'> */}
        {/* <img src={sobieski} alt="something goes here" id='sobieski' className='col-4'/> */}
        {/* </div> */}
        <div className="row about-info col-lg-8 reveal">
          <p className="about-info">
            I'm a dedicated developer who enjoys building high-quality
            responsive web and mobile apps. I recently completed a full-stack
            mobile and web development bootcamp focused on Bootstrap, React JS,
            React Native, Node.js and MongoDB.{" "}
          </p>

          <p className="about-info">
            I have 9+ years of professional experience in higher education in
            the U.K. and U.S. As a former teacher, I'm accustomed to working
            with a variety of working styles, and I understand the importance of
            always learning and working in a team. I am detail-oriented, an avid
            learner, and enjoy freelance work while I search for my place in the
            world of web development.{" "}
          </p>

          <p className="about-info">
            When I'm not coding, I enjoy being on the move, whether it's in the form of cycling, skiing, walking or shuffling. On a rainy day, you can catch me perusing the foreign language category on Netflix. 
          </p>

          {/* <div className="about-button-div align-self-baseline"> */}
  
          {/* </div> */}
        
        </div>

        <Button class="btn-about col-xs-12 col-lg-4 col-xl-2 mt-4" href="/projects">
                    My Experience
              </Button>
         
      </section>


        


  
    
    )
}