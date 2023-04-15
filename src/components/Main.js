import React from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";
import lavender from "../images/lavender/lavenderField.jpg";

// adds scrolling animation 
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight; // gives the height of the viewport
    let elementTop = reveals[i].getBoundingClientRect().top; // gives the distance from the top of the viewport
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

console.log(reveal);

window.addEventListener("scroll", (reveal) => {
  console.log('scroll code running')
});

// To check the scroll position on page load
reveal();

// const masthead = document.querySelector('.masthead-text-box')

// console.log(masthead)

// masthead.addEventListener('onload', (reveal) => {
//   console.log('masthead code running')
// });


export default function Main(props) {
  const year = new Date().getFullYear();

  return (
    <main id="page-top">
      <div className="masthead">
        <div class="container masthead-about px-4 px-lg-5 h-100">
          <div class="row masthead-row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end hello-box">
              <h1 class="text-white font-weight-bold masthead-header" onLoad={reveal}>Hello!</h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 masthead-about-text align-self-baseline">
              <p class="text-white-75 mb-5 masthead-text-box">
                I'm a dedicated developer who enjoys building high-quality
                responsive web and mobile apps. I recently completed a
                full-stack mobile and web development bootcamp focused on
                Bootstrap, React JS, React Native, Node.js and MongoDB.
              </p>
              <a class="btn btn-xl btn-masthead" href="#about-section">
                My Background
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
