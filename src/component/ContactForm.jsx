import React, { useState } from 'react';
import "../css/style2.css";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendForm = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      from_name: name,
      to_name: "G & 4D's Digital Concepts Limited",
      message: message,
    };


    emailjs
      .send(
        "service_ympac2i",
        "template_ycahxd7",
        templateParams,
        "WjXFTEx9D_FLBa_Cx"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thank you for reaching out!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send. Please try again.");
      });

    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <>
      <section class="contact-section">
        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you have questions, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div class="contact-container">
          <div class="contact-row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-home"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>Isolo, Lagos, Nigeria.</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-phone"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>+(234) 913 222 2267, +(234) 913 444 4463</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>gn4ddigitalconceptsenterprises@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form onSubmit={sendForm} action="" id="contact-form">
                <h2>Reach Out To Us!</h2>
                <div class="input-box">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="true"
                    name=""
                  />
                  <span>Full Name</span>
                </div>

                <div class="input-box">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="true"
                    name=""
                  />
                  <span>Email</span>
                </div>

                <div class="input-box">
                  <textarea
                    required="true"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                  ></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm