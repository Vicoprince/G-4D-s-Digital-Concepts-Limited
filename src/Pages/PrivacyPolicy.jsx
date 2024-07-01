import React from 'react';
import "../css/style.css";
import "../css/style2.css";
import "../css/style.scss";
import "../css/responsive.css";
import Footer from "../component/Footer";
import { Nav } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="hero_area">
        <header class="header_section">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="/">
                <img src="./images/g4d_logo2.png" alt="G & 4D's Digital Concepts Limited"/>
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class=""> </span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/">
                    HOME
                  </Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/about">
                    About us
                  </Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/our-services">
                    services
                  </Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/why-us">
                    Why Us
                  </Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/contact-us">
                    Contact
                  </Nav.Link>
                </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section class="policy_section layout_padding">
          <div class="container">
            <div class="heading_container heading_center">
              <h2>
                Our <span>Privacy Policy</span>
              </h2>
              <p>
                G & 4D's Digital Concepts Limited ("we", "our", "us") is
                committed to protecting your privacy. This Privacy Policy
                outlines how we collect, use, and protect your personal
                information. By using our services, you agree to the practices
                described in this policy.
              </p>
            </div>
            <div class="policy_container">
              <div class="layout_padding2">
                <h3>Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    <b>Personal Information: </b> Name, email address, phone
                    number, and other contact details.
                  </li>
                  <li>
                    <b>Business Information: </b>Company name, industry,
                    business needs, and other related information.
                  </li>
                  <li>
                    <b>Usage Data: </b>Information about how you interact with
                    our services, including IP address, browser type, and pages
                    visited.
                  </li>
                </ul>
              </div>
              <div class="layout_padding-bottom">
                <h3>How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our services.</li>
                  <li>Personalize your experience.</li>
                  <li>
                    Communicate with you about our services and respond to your
                    inquiries.
                  </li>
                  <li>
                    Conduct research and analysis to enhance our service
                    offerings.
                  </li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
              <div class="layout_padding-bottom">
                <h3>Sharing Your Information</h3>
                <p>
                  We do not share your personal information with third parties
                  except:
                </p>
                <ul>
                  <li>With your consent.</li>
                  <li>To comply with legal requirements.</li>
                  <li>To protect our rights and property.</li>
                  <li>
                    Conduct research and analysis to enhance our service
                    offerings.
                  </li>
                  <li>
                    With third-party service providers who assist us in
                    operating our business, provided they agree to keep your
                    information confidential.
                  </li>
                </ul>
              </div>
              <div class="layout_padding-bottom">
                <h3>Data Security</h3>
                <p>
                  We implement a variety of security measures to maintain the
                  safety of your personal information. However, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information.</li>
                  <li>Request the deletion of your personal information.</li>
                  <li>Opt-out of receiving marketing communications.</li>
                </ul>
              </div>
              <div class="layout_padding-bottom">
                <h3>Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on our
                  website. Your continued use of our services after such changes
                  indicates your acceptance of the new policy.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at gn4ddigitalconceptsenterprises@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy