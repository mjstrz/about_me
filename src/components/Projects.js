import React from 'react';
import { Card, CardImg, CardImgOverlay, CardDeck, CardTitle, Row, Col, CardBody, CardText, CardGroup, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {farineScreenshot} from '../images/farine-screenshot.png';

export default function Projects() { 

    
    return (
      <div className="projects-section">
        <h2 id="projects-header">Projects</h2>
        <hr class="divider divider-light" />

        <div className="projects">
          <CardGroup>
            {/* Card #1 */}
            <Card className="col-6">
              <CardImg
                alt="Farine portfolio project screenshot"
                // src={farineScreenshot}
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
                <Button className="github-button">Live Site</Button>
                <Button className="github-button">Code</Button>
              </CardBody>
            </Card>

            {/*Card #2  */}
            <Card className="col-6">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button className="github-button">Live Site</Button>
                <Button className="github-button">Code</Button>
              </CardBody>
            </Card>
          </CardGroup>

          <CardGroup>
            {/* Card #3 */}
            <Card className="col-6">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="33%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button className="github-button">Live Site</Button>
                <Button className="github-button">Code</Button>
              </CardBody>
            </Card>

            {/* Card #4 */}
            <Card className="col-6">
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="33%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="github-button">Live Site</Button>
                <Button className="github-button">Code</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
}