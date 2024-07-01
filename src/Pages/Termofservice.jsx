import React from "react";
import "../css/style.css";
import "../css/style2.css";
import "../css/style.scss";
import "../css/responsive.css";
import Footer from "../component/Footer";
import { Nav } from "react-bootstrap";

const Termofservice = () => {
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
                Our <span>Terms of Service</span>
              </h2>
              <p>
                These Terms of Service ("Terms") govern your use of the services
                provided by G & 4D's Digital Concepts Limited ("we", "our",
                "us"). By using our services, you agree to these Terms.
              </p>
            </div>
            <div class="policy_container">
              <div class="layout_padding2">
                <h3>Services</h3>
                <p>
                  We offer tailored business support and digital services
                  designed to assist businesses in embracing the digital era,
                  utilizing cutting-edge technologies, and streamlining
                  operations to increase productivity and competitiveness.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Use of Services</h3>
                <ul>
                  <li>
                    <b>Eligibility: </b>You must be at least 18 years old to use
                    our services.
                  </li>
                  <li>
                    <b>Account Responsibility: </b>You are responsible for
                    maintaining the confidentiality of your account information
                    and for all activities that occur under your account.
                  </li>
                  <li>
                    <b>Prohibited Activities: </b>You agree not to engage in any
                    unlawful activities or use our services in a way that could
                    harm our business or reputation.
                  </li>
                </ul>
              </div>
              <div class="layout_padding-bottom">
                <h3>Intellectual Property</h3>
                <p>
                  All content and materials provided by us, including text,
                  graphics, logos, and software, are our property and are
                  protected by copyright, trademark, and other intellectual
                  property laws. You may not use our intellectual property
                  without our prior written consent.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Limitation of Liability</h3>
                <p>
                  We strive to provide excellent services, but we make no
                  guarantees about the accuracy, reliability, or completeness of
                  our services. To the fullest extent permitted by law, we
                  disclaim all warranties, express or implied, and we are not
                  liable for any damages arising from your use of our services.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Termination</h3>
                <p>
                  We reserve the right to terminate or suspend your access to
                  our services at any time, without notice, for conduct that we
                  believe violates these Terms or is harmful to our business or
                  users.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Changes to These Terms</h3>
                <p>
                  We may update these Terms from time to time. We will notify
                  you of any changes by posting the new Terms on our website.
                  Your continued use of our services after such changes
                  indicates your acceptance of the new Terms.
                </p>
              </div>
              <div class="layout_padding-bottom">
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us
                  at gn4ddigitalconceptsenterprises@gmail.com
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

export default Termofservice