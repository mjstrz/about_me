import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardDeck,
  CardTitle,
  Row,
  Col,
  CardBody,
  CardText,
  CardGroup,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import farineLogo from "../images/Farine_logo2.png";
import memeLogo from "../images/memeEmoji.jpg";
import blackJack from "../images/Blackjack-21_v2.jpg";
import tenzies from "../images/tenziesDice.jpg";
import Lavender from "../images/lavender/lavenderFieldParallax.jpg";

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

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

export default function Projects() {
  return (
    <div className="row projects projects-section">
    <div className="container project-cards-bgcolor" id="projects">
      {/* <div className="container projects"> */}
        <h2 id="projects-header" className="reveal">
          Projects
        </h2>

        {/* <CardGroup> */}
          {/* <row> */}
          {/* Card #1 */}
          <Card className="col reveal">
            <CardImg
              classname="farine-logo"
              alt="Farine cafe logo"
              src={farineLogo}
              top
              width="33%"
            />
            <CardBody>
              <CardTitle tag="h3">Farine Bakery & Cat Cafe</CardTitle>
              <CardSubtitle
                className="mb-2 text-muted align-items-center"
                tag="h6"
              ></CardSubtitle>
              <CardText>
                A cozy and quaint cat cafe site I created for a NuCamp portfolio
                assignment, built using React JS.
              </CardText>
              <Button
                className="github-button"
                target="_blank"
                href="https://mjstrz.github.io/farine-react/"
              >
                Live Site
              </Button>
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/farine-react"
              >
                Code
              </Button>
            </CardBody>
          </Card>

          {/*Card #2  */}
          <Card className="col reveal">
            <CardImg alt="Lavender field" src={Lavender} top width="15%" />
            <CardBody>
              <CardTitle tag="h3">This Portfolio Site</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
              <CardText>
                Feel free to check out my code for making this portfolio site
                come to life, created using React JS.
              </CardText>
              {/* <Button className="github-button" href="https://mjstrz.github.io/meme_generator/">Live Site</Button> */}
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/about_me"
              >
                Code
              </Button>
            </CardBody>
          </Card>
        {/* </CardGroup> */}

        {/* <CardGroup> */}
          <Card className="col reveal">
            <CardImg
              alt="Farine cat cafe logo"
              src={farineLogo}
              top
              width="33%"
            />
            <CardBody>
              <CardTitle tag="h3">Farine Bakery & Cafe [Bootstrap]</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
              <CardText>
                My cat cafe NuCamp Portfolio assignment that I initially created
                using Bootstrap.
              </CardText>
              <Button className="github-button" target="_blank">
                Live Site
              </Button>
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/farine-bootstrap-updated"
              >
                Code
              </Button>
            </CardBody>
          </Card>

          {/* </CardGroup> */}

          {/* <CardGroup> */}
          {/* Card #3 */}
          <Card className="col card-bottom reveal">
            <CardImg alt="Three different emoji faces" src={memeLogo} top width="33%" />
            <CardBody>
              <CardTitle tag="h3">Meme Generator</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
              <CardText>A fun meme generator built using React JS.</CardText>
              <Button
                className="github-button"
                target="_blank"
                href="https://mjstrz.github.io/meme_generator/"
              >
                Live Site
              </Button>
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/meme_generator"
              >
                Code
              </Button>
            </CardBody>
          </Card>
        {/* </CardGroup> */}

        {/* Card #4 */}

        {/* Card #5 */}
        {/* <CardGroup> */}
          <Card className="col card-bottom reveal">
            <CardImg alt="6 die on a black tabletop" src={tenzies} top width="33%" />
            <CardBody>
              <CardTitle tag="h3">Tenzies</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
              <CardText>A fun game designed using React JS.</CardText>
              <Button
                className="github-button"
                target="_blank"
                href="https://mjstrz.github.io/tenzies_game/"
              >
                Live Site
              </Button>
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/tenzies_game"
              >
                Code
              </Button>
            </CardBody>
          </Card>

          {/* Card #6 */}

          <Card className="col card-bottom reveal">
            <CardImg alt="Peeking at cards on a blackjack table" src={blackJack} top width="33%" />
            <CardBody>
              <CardTitle tag="h3">Black Jack</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
              <CardText>A fun game designed using React JS.</CardText>
              <Button className="github-button" target="_blank">
                Live Site
              </Button>
              <Button
                className="github-button"
                target="_blank"
                href="https://github.com/mjstrz/blackjack_game"
              >
                Code
              </Button>
            </CardBody>
          </Card>
          
          {/* </row> */}
        {/* </CardGroup> */}
      {/* </div> */}
    </div>
    </div>
  );
}
