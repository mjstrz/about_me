import React from 'react';
import { Card, CardImg, CardImgOverlay, CardDeck, CardTitle, Row, Col, CardBody, CardText, CardGroup, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import farineLogo from '../images/Farine_logo2.png';
import memeLogo from '../images/memeEmoji.jpg';
import blackJack from '../images/Blackjack-21_v2.jpg';
import tenzies from '../images/tenziesDice.jpg';

export default function Projects() { 

    
    return (
      <section className="projects-section" id="#projects">       
        <div className="projects">
        <h2 id="projects-header">Projects</h2>
            <div class="row projects-header-divider">
          <hr class="divider divider-light" />
        </div>

          <CardGroup>
            {/* Card #1 */}
            <Card className="col-6">
              <CardImg 
                classname="farine-logo"
                alt="Farine cafe logo"
                src={farineLogo}
                top
                width="33%"
              />
              <CardBody>
                <CardTitle tag="h5">Farine Bakery & Cat Cafe</CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted align-items-center"
                  tag="h6"
                ></CardSubtitle>
                <CardText>
                  NuCamp portfolio assignment built using React JS.
                </CardText>
                <Button className="github-button" href="https://mjstrz.github.io/farine-react/">Live Site</Button>
                <Button className="github-button" href="https://github.com/mjstrz/farine-react">Code</Button>
              </CardBody>
            </Card>

            {/*Card #2  */}
            <Card className="col-6">
              <CardImg
                alt="Card image cap"
                src={memeLogo}
                top
                width="%"
              />
              <CardBody>
                <CardTitle tag="h5">Meme Generator</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
                <CardText>
                  A fun meme generator built using React JS. 
                </CardText>
                <Button className="github-button" href="https://mjstrz.github.io/meme_generator/">Live Site</Button>
                <Button className="github-button" href="https://github.com/mjstrz/meme_generator">Code</Button>
              </CardBody>
            </Card>
          </CardGroup>

          <CardGroup>
            {/* Card #3 */}
            <Card className="col-6 card-bottom">
              <CardImg
                alt="Card image cap"
                src={tenzies}
                top
                width="33%"
              />
              <CardBody>
                <CardTitle tag="h5">Tenzies</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
                <CardText>
                  A fun game designed using React JS. 
                </CardText>
                <Button className="github-button" href="https://mjstrz.github.io/tenzies_game/">Live Site</Button>
                <Button className="github-button" href="https://github.com/mjstrz/tenzies_game">Code</Button>
              </CardBody>
            </Card>

            {/* Card #4 */}
            <Card className="col-6 card-bottom">
              <CardImg
                alt="Card image cap"
                src={blackJack}
                top
                width="33%"
              />
              <CardBody>
                <CardTitle tag="h5">Black Jack</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle> */}
                <CardText>
                  A fun game designed using React JS. 
                </CardText>
                <Button className="github-button">Live Site</Button>
                <Button className="github-button" href="https://github.com/mjstrz/blackjack_game">Code</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </section>
    );
}