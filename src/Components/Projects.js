import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import figmaMed from '../assets/ProjectsImg/figmaMed.JPG'
import medpage from '../assets/ProjectsImg/medpage.JPG'
import rentalcar from '../assets/ProjectsImg/rentalcar.JPG'
import figmap from '../assets/ProjectsImg/figmap.jpg'
import ProjectCard from "./ProjectCard";
import figmaSales from '../assets/ProjectsImg/figmasales.JPG'
import shopping from '../assets/ProjectsImg/shopping.JPG'
import budget from '../assets/ProjectsImg/budget.JPG'
import bootstrap_logo from '../assets/bootstrap_logo.png'
function Projects () {
    const projects =[
        {
            title:"Rental Car App",
            id:1,
            description:"An application designed to help users easily rent cars for their travel needs, offering a wide selection of vehicles and convenient booking options.",
            imgUrl: rentalcar,
            link:'https://rentalcarsbybrunio97.netlify.app/'
        },{
            title:"Medical Appointment Booking App",  
            id:2,
            description:"This app simplifies the process of scheduling medical appointments, allowing users to book appointments with healthcare providers quickly and efficiently from their mobile devices.",
            imgUrl: medpage,
            link:'https://medicalappointmentbrunio97.netlify.app/'
        },
        {
            title:"Shopping App",
            id:3,
            description:"A user-friendly shopping platform that enables users to browse and purchase a variety of products from different retailers, providing a seamless shopping experience from search to checkout",
            imgUrl: shopping,
            link:'https://shopping-app-indol.vercel.app/'
        }, 
        {
            title:"Company's Budget Allocation",
            id:4,
            description:"An intuitive budgeting tool that empowers users to track their expenses, set financial goals, and manage their finances effectively, helping them achieve financial stability and peace of mind.",
            imgUrl: budget,
            link:'https://react-budget-app-theta.vercel.app/'
        },
        {
            title:"Figma Medical Appointment Booking App",
            id:6,
            description:"A Figma prototype demonstrating the user interface and flow of a medical appointment booking application, showcasing features such as appointment scheduling, doctor selection, and patient registration.",
            imgUrl: figmaMed,
            link:'https://www.figma.com/file/TrNGc9vOh0E0nL2NSYkD52/Final-Project?type=design&node-id=0%3A1&mode=design&t=j7Ax6AAJ5MplbrVe-1'
        },
        {
            title:"Figma Mobile App",
            id:5,
            description:"A Figma prototype illustrating the design and functionality of a mobile application project, offering insights into its user interface, navigation structure, and interactive elements.",
            imgUrl: figmaSales,
            link:'https://www.figma.com/file/wgjzDDMLH2O9wDqutLRMVl/Medical-Appointment-Booking-Application?type=design&node-id=0%3A1&mode=design&t=HR76S9ZylmhCj1vf-1'
        }   
    ]
    return(
        <section className="project" id="projects">
             <Container>
             <span className="tagline">Projects</span>
             <p>Welcome to the projects section of my portfolio! Below, you'll find a representative sample of projects I've undertaken, ranging from innovative web developments to creative design solutions. Each project showcases my skills and approaches in problem-solving. Dive into these examples for a more detailed insight into my experience and creative approach.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Row>
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
                    </Row> 
                    <Row>   
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row >

                                        {
                                            projects.slice(0, 3).map((project,index)=>{
                                                return (
                                                        <Col sm={4} style={{height: 'fit-content'}}>
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                         />
                                                        </Col>
                                                );
                                            })
                                        }
                                   </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row >
                                        {
                                            projects.slice(3, 6).map((project,index)=>{
                                                return (
                                                    <Col sm={4} style={{height:'fit-content'}}>
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                   />
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row >
                                        {
                                            projects.slice(6, 9).map((project,index)=>{
                                                return (
                                                    <Col sm={4} style={{height:'fit-content'}}>
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                </Tab.Content>
                     
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
}
export default Projects;