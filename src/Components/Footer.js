import { Container, Row, Col } from "react-bootstrap";
import logoBS from '../assets/logoBS.png'
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logoBS} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/brunio97"><FaGithub className="fa-icon"/></a>
                <a href="https://www.linkedin.com/in/bruno-salinas-velez/"><FaLinkedin className="fa-icon"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;