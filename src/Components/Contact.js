import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMail from '../assets/SendMail.gif'

function Contact (){
   
 const [firstName, setFirstName]=useState("")
 const [lastName,setLastName]=useState("")
 const [emailContact,setEmailContact]=useState("")
 const [phoneNum,setPhoneNum]=useState("")
 const [messageText,setMessageText]=useState("")

 console.log(firstName,lastName,emailContact,phoneNum,messageText)
return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col className="izq" size={12} md={6}>
            <img src={SendMail}alt="contact me"/>
        </Col>
        <Col className="der" size={12} md={6}>
            <h2>Get In Touch</h2>
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact"/>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="First Name" name="first-name" id="first-name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text"  placeholder="Last Name" name="last-name" id="last-name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email"  placeholder="Email Address" name="emailcontact" id="emailcontact" value={emailContact} onChange={(e)=>setEmailContact(e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel"  placeholder="Phone No." name="phonenumber" id="phonenumber" value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)}/>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="3"  placeholder="Message" name="paragraph" id="paragraph" value={messageText} onChange={(e)=>setMessageText(e.target.value)}></textarea>
                    <button type="submit"><span>SEND...</span></button>
                  </Col>
                </Row>
              </form>
        </Col>
      </Row>
    </Container>
  </section>
);    
}
export default Contact;


 /*start: node server.js*/