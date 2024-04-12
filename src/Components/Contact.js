import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMail from '../assets/SendMail.gif'

function Contact (){
    
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };
  // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    //   }
    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState('Send');
    // const [status, setStatus] = useState({});
    
    // const onFormUpdate = (category, value) => {
    //       setFormDetails({
    //         ...formDetails,
    //         [category]: value
    //       })
    // }
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code == 200) {
    //       setStatus({ succes: true, message: 'Message sent successfully'});
    //     } else {
    //       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     }
    // };
    
return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col className="izq" size={12} md={6}>
            <img src={SendMail}alt="contact me"/>
        </Col>
        <Col className="der" size={12} md={6}>
            <h2>Get In Touch</h2>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
              {/* <form name="contact" netlify>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="First Name" name="first-name" id="first-name"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="Last Name" name="last-name" id="last-name"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email"  placeholder="Email Address" name="emailcontact" id="emailcontact"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel"  placeholder="Phone No." name="phonenumber" id="phonenumber"/>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="3"  placeholder="Message" name="paragraph" id="paragraph"></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form> */}
        </Col>
      </Row>
    </Container>
  </section>
);    
}
export default Contact;


 /*start: node server.js*/