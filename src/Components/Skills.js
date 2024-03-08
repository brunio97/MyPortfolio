import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Button, Card, Carousel, ListGroup } from "react-bootstrap";

import CSS3_logo from '../assets/CSS3_logo.svg';
import HTML5_logo from '../assets/HTML5_logo.svg';
import js_logo from '../assets/js_logo.svg';
import React_logo from '../assets/React_logo.svg';
import bootstrap_logo from '../assets/bootstrap_logo.png';
import Figma_logo from '../assets/Figma_logo.svg';
import mongodb_logo from '../assets/mongodb_logo.svg';

function Skills() {
  return (
    <section className="skills" id="home">
        <Container>
        <span className="tagline">Skills</span>

        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <span className="tag-list">Development Languages</span>
            <Carousel>
                <Carousel.Item>
                    <Card >
                    <Card.Img variant="top" src={HTML5_logo} />
                    <Card.Body>
                        <Card.Title><strong>HTML5</strong></Card.Title>
                        <Card.Text>
                            (HyperText Markup Language)
                            Standard language for creating web page structures using tags and attributes.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img variant="top" src={CSS3_logo} />
                    <Card.Body>
                        <Card.Title><strong>CSS3</strong></Card.Title>
                        <Card.Text>
                        (Cascading Style Sheets)
                        Style language for controlling web page presentation and layout
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img variant="top" src={js_logo} />
                    <Card.Body>
                        <Card.Title><strong>JavaScript</strong></Card.Title>
                        <Card.Text>
                        JS powers dynamic web content, enhancing user interactivity in browsers, and extends its utility to server-side development and diverse applications.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img variant="top" src={React_logo} />
                    <Card.Body>
                        <Card.Title><strong>React.js</strong></Card.Title>
                        <Card.Text>
                        Is a JavaScript library for building dynamic user interfaces, known for efficiently managing components and state in web applications.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img  variant="top" src={bootstrap_logo} />
                    <Card.Body>
                        <Card.Title><strong>Bootstrap</strong></Card.Title>
                        <Card.Text>
                        Front-End Framework. Simplifies web development with pre-designed components, styles, and utilities for responsive websites.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img  variant="top" src={Figma_logo} />
                    <Card.Body>
                        <Card.Title><strong>Figma</strong></Card.Title>
                        <Card.Text>
                        Cloud-based,collaborative design tool for creating user interfaces and interactive prototypes, fostering real-time teamwork
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card >
                    <Card.Img  variant="top" src={mongodb_logo} />
                    <Card.Body>
                        <Card.Title><strong>MongoDB</strong></Card.Title>
                        <Card.Text>
                        MongoDB is a scalable NoSQL database using JSON-like documents, ideal for flexible and evolving data needs in applications.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
            
            </Col>
            <Col xs={12} md={6} xl={5}>
            <span className="tag-list">Skill Summary</span>
                <ListGroup>
                    <ListGroup.Item><li>Front-End Developer with responsive design</li></ListGroup.Item>
                    <ListGroup.Item><li>Knowledge of <strong><em>version control</em></strong> systems such as Git for collaboration and tracking code changes</li></ListGroup.Item>
                    <ListGroup.Item><li>Collaboration with  <strong><em>UX/UI</em></strong> designers to implement attractive and user-centered designs.</li></ListGroup.Item>
                    <ListGroup.Item><li>Proficient in <strong><em>HTML, CSS, and JavaScript</em></strong> for effective web development</li></ListGroup.Item>
                    <ListGroup.Item><li>Agile Development & Scrum</li></ListGroup.Item>
                </ListGroup>
            </Col>  
        </Row>
           
    </Container>
    </section> 
  );
}
export default Skills;