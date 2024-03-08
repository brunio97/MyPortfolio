import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import figmap from '../assets/ProjectsImg/figmap.jpg'
import bootstrap_logo from '../assets/bootstrap_logo.png'
function Projects () {
    const projects =[
        {
            title:"Figma",
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: figmap,
        },{
            title:"react",  
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: bootstrap_logo,
        },
        {
            title:"css",
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: bootstrap_logo,
        }, {
            title:"css",
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: figmap,
        },
        {
            title:"css",
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: figmap
        },
        {
            title:"css",
            description:"figma es un atributo en el ual se realizo una imagen de 2 apllicaciones ",
            imgUrl: figmap
        }
    ]
    return(
        <section className="project" id="projects">
             <Container>
             <span className="tagline">Projects</span>
             <p>Welcome to the projects section of my portfolio! Below, you'll find a representative sample of projects I've undertaken, ranging from innovative web developments to creative design solutions. Each project showcases my skills and approaches in problem-solving. Dive into these examples for a more detailed insight into my experience and creative approach.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Row >
                        <Col className="colo" sm={5}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                                <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>  
                            </Nav>
                        </Col>
                        <Col className="colo" sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
}
export default Projects;