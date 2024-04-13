import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import account from '../assets/account.jpg'
import coding from '../assets/coding.jpg'
const About = () => {
  

    return(
        <section className="about" id="about">
            <Container>
            <span className="tagline">About me</span>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`A dedicated Front-End Developer based in Bolivia`}</h1>
                        <p>As a Junior Front-End Developer, I possess an impressive skill set in HTML, CSS, JavaScript, and React. I specialize in designing and maintaining responsive websites, creating engaging and functional user experiences. My proactive approach and passion for programming drive me to continuously learn about technological development and emerging technologies, facing new challenges with enthusiasm. Moreover, I am a team player who thrives in collaborating with multidisciplinary teams to produce exceptional applications. I am committed to delivering high-quality solutions and excited to continue contributing to the dynamic world of web development.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={coding} alt="coding"/>
                    </Col>  
                </Row>
            </Container>
        </section>
    )

}

export default About;