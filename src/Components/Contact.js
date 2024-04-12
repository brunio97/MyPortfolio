import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SendMail from '../assets/SendMail.gif'

function Contact (){
   // State to store form data
   const [formData, setFormData] = useState({});

   // Function to handle changes in form inputs
   const handleChange = (event) => {
     setFormData({
       ...formData,
       [event.target.name]: event.target.value
     });
   };
 
   // Function to handle form submission
   const handleSubmit = (event) => {
     event.preventDefault();
     const myForm = event.target;
     const formData = new FormData(myForm);
 
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded" },
       body: new URLSearchParams(formData).toString(),
     })
     .then(() => console.log("thank"))
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
           
            <form
    data-netlify="true"
    name="pizzaOrder"
    method="post"
    onSubmit={handleSubmit}
  >
    <input type="hidden" name="form-name" value="pizzaOrder" />
    <label>
      What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit" />
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