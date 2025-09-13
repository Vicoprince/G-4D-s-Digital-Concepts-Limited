import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/style.scss";
import "./css/responsive.css";
import Navbar from "./component/Navbar";
import Script from "./component/Script";
import Footer from "./component/Footer";
import Aboutsection from "./component/Aboutsection";
import CoreValue from "./component/CoreValue";
import WhySection from "./component/WhySection";
import Newslettersection from "./component/Newslettersection";
import Clientsection from "./component/Clientsection";

const Home = () => {
  return (
    <>
      <div class="hero_area">
        <Navbar />

        <section class="slider_section ">
          <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Elevate Your <br />
                          Digital Presence
                        </h1>
                        <p>
                          Harness cutting-edge technologies to boost your
                          business productivity and competitiveness.
                        </p>
                        <div class="btn-box">
                          <Link to="/about" class="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Unlock
                          <br />
                          New Opportunities
                        </h1>
                        <p>
                          Providing great service consistently and supporting
                          your digital journey.
                        </p>
                        <div class="btn-box">
                          <Link to="/about" class="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Drive
                          <br />
                          Measurable Growth
                        </h1>
                        <p>
                          Assisting companies in starting or improving their
                          digital journeys.
                        </p>
                        <div class="btn-box">
                          <Link to="/about" class="btn1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>

      <CoreValue />
      <Aboutsection />

      <section class="mission_section layout_padding2-bottom">
        <div class="service_container">
          <div class="container ">
            <div class="heading_container heading_center">
              <h2>
                Our <span>Mission</span> & <span>Vision</span>
              </h2>
              <p>
                At G & 4D's Digital Concepts Limited, our core values are the
                foundation of everything we do. These values guide our actions
                and define our commitment to our clients and partners.
              </p>
            </div>
            <div class="row">
              <div class="col-md-6 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/target.png" alt="Mission" />
                  </div>
                  <div class="detail-box">
                    <h5>Mission</h5>
                    <p>
                      We are committed to empowering organizations to thrive in the 
                      digital age by delivering innovative solutions that drive 
                      sustainable transformation, enhance efficiency, and create 
                      lasting value for all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/vision.png" alt="Vision" />
                  </div>
                  <div class="detail-box">
                    <h5>Vision</h5>
                    <p>
                      <br />
                      We believe in the power of partnership, working closely
                      with clients, partners, and stakeholders to co-create
                      solutions and achieve shared success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhySection />
      <Newslettersection />
      <Clientsection />

      <Footer />
      <Script />
    </>
  );
};

export default Home;
