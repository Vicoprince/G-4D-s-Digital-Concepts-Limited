import React from "react";
import "../css/style.css";
import "../css/style.scss";
import "../css/responsive.css";
import Footer from "../component/Footer";
import { Nav } from "react-bootstrap";

const Services = () => {
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

        <section class="about_section layout_padding">
          <div class="container  ">
            <div class="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                We are into the Business of providing a professional service to
                our clients based on our experience and expertizes in the
                digital business space to help improve performance and solve
                problems in business operations, strategy, management,
                technology, or a specific challenges.
              </p>
            </div>
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/s4.png" alt="Consulting Services" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Consulting Solution</h3>
                  <p>
                    We provide strategic consulting services that help 
                    businesses assess their current state, define digital 
                    goals, and design actionable roadmaps for implementation. 
                    Leveraging our expertise in business operations, strategy, 
                    management, and technology, we deliver tailored solutions 
                    to improve performance and solve complex challenges.
                  </p>
                  <p>
                    <b>Our approach </b>is collaborative—analyzing practices, 
                    identifying opportunities, and recommending strategies for process 
                    optimization, organizational restructuring, and technology adoption. 
                    With specialized skills and industry insight, we enable clients to 
                    increase revenue, enhance efficiency, enter new markets, and achieve sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2" id="read_about2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Technology Integration Solution</h3>
                  <p>
                    We specialize in integrating advanced technologies—including 
                    Artificial Intelligence, IoT, cloud computing, and data analytics—
                    into business processes, whether building from the ground up or 
                    enhancing existing systems. Our solutions streamline operations, 
                    improve productivity, and drive efficiency through seamless technology adoption.
                  </p>
                  <p>Our services include:</p>
                  <ul>
                    <li>
                      <b>Assessment and Planning: </b>Evaluating infrastructure and designing integration strategies.
                    </li>
                    <li>
                      <b>System Integration: </b>Ensuring compatibility across software, hardware, and platforms.
                    </li>
                    <li>
                      <b>Custom Development: </b>Creating tailored applications to meet business needs.
                    </li>
                    <li>
                      <b>Data Migration: </b>Transferring data securely with minimal disruption.
                    </li>
                    <li>
                      <b>Training and Support: </b>Equipping teams for smooth adoption and ongoing success.
                    </li>
                    <li>
                      <b>Security Integration: </b>Embedding robust cybersecurity measures.
                    </li>
                    <li>
                      <b>Cloud Integration: </b>Enabling scalability, accessibility, and flexibility.
                    </li>
                  </ul>
                  <p>By combining innovation with expertise, we empower organizations to adapt, scale, and thrive in the digital age.</p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/ab2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/ab1.png" alt="Consulting Services" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Custom Software Development Solution</h3>
                  <p>
                   We design and develop custom software solutions tailored to clients’ 
                   unique needs, helping them digitize, automate, and optimize operations 
                   beyond the limits of off-the-shelf applications. Built from the ground up, 
                   our solutions address specific business challenges, workflows, and goals.
                  </p>
                  <p>Our approach covers the full software development lifecycle:</p>
                  <ul>
                    <li>
                      <b>Requirement Analysis: </b>Understanding processes, goals, and scope.
                    </li>
                    <li>
                      <b>Design: </b>Crafting user-focused UI/UX and robust architecture.
                    </li>
                    <li>
                      <b>Development: </b>Coding, integration, and functionality alignment.
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2" id="read_about2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <ul>
                    <li>
                      <b>Testing: </b>Ensuring reliability, security, and performance.
                    </li>
                    <li>
                      <b>Deployment: </b>Seamless installation, configuration, and data migration.
                    </li>
                    <li>
                      <b>Training: </b>Preparing end-users for smooth adoption.
                    </li>
                    <li>
                      <b>Maintenance & Support: </b>Providing updates, issue resolution, and ongoing optimization.
                    </li>
                  </ul>
                  <p>
                    With this end-to-end process, we deliver scalable, secure, and high-performing applications 
                    that evolve with our clients’ businesses.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/s5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img
                    src="images/pic2.png"
                    alt="Digital Strategy Development Services"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Digital Strategy Development Services</h3>
                  <p>
                    We partner with clients to design comprehensive digital strategies 
                    that align with business objectives, driving growth, innovation, 
                    and competitiveness. Our approach ensures a cohesive transformation 
                    journey by leveraging the right technologies, channels, and content 
                    to maximize impact.
                  </p>
                  <p>Our process includes assessing digital readiness, defining measurable goals, 
                    identifying target audiences, and selecting effective platforms. We craft 
                    tailored content strategies, recommend the right tools, and develop structured 
                    implementation plans. Through continuous measurement, analysis, and optimization, 
                    we ensure digital initiatives remain agile, relevant, and results-driven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Data Management and Analytics services</h3>
                  <p>
                    We help businesses unlock the power of data by implementing 
                    solutions that drive informed decision-making, business intelligence, 
                    and sustainable growth. Our services enhance operational efficiency, 
                    ensure data integrity and security, and enable compliance with regulatory standards.
                  </p>
                  <p>
                    Through advanced analytics, we generate actionable insights, personalize 
                    customer experiences, identify risks and opportunities, and provide a 
                    competitive edge in the marketplace. Scalable and adaptable, our 
                    solutions support business growth while fostering continuous improvement and optimization.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/pic1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img
                    src="images/pic3.png"
                    alt="Digital Strategy Development Services"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>IoT Solutions services</h3>
                  <p>
                    We design and deploy Internet of Things (IoT) solutions 
                    that connect devices, collect data, and create smart, 
                    connected ecosystems for businesses. Our IoT services 
                    drive efficiency, enable predictive maintenance, optimize 
                    supply chains, and improve energy management while 
                    enhancing customer experiences and workplace safety.
                  </p>
                  <p>
                    By harnessing real-time data, we empower organizations 
                    to make informed decisions, scale with flexibility, 
                    ensure compliance, and gain a competitive edge in 
                    today’s digital economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Cloud Migration and Management Services</h3>
                  <p>
                    We help businesses migrate to cloud platforms for greater 
                    scalability, flexibility, and cost efficiency, while 
                    providing ongoing management to ensure performance, 
                    security, and reliability.
                  </p>
                  <p>
                    Our services enable reduced infrastructure costs, 
                    enhanced data protection, improved collaboration, 
                    and built-in disaster recovery for business continuity. 
                    With access to innovative cloud technologies and global 
                    infrastructure, we empower organizations to scale seamlessly, 
                    optimize operations, and stay competitive in a digital-first world.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/pic4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img
                    src="images/pic5.png"
                    alt="User Experience (UX) Design Services<"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>User Experience (UX) Design Services</h3>
                  <p>
                    We create intuitive, user-friendly web and app interfaces 
                    that deliver seamless digital experiences across platforms. 
                    Our UX design focuses on aligning user needs with business 
                    goals to enhance satisfaction, engagement, and conversion.
                  </p>
                  <p>
                    With well-crafted interfaces, we help businesses reduce errors, 
                    improve accessibility, streamline workflows, and strengthen 
                    brand perception. By leveraging user insights and data-driven 
                    design, we ensure products that not only delight users 
                    but also provide a lasting competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Security Solutions Services</h3>
                  <p>
                    We design and implement robust cybersecurity measures to 
                    safeguard digital assets, protect sensitive data, and 
                    ensure compliance with industry standards.
                  </p>
                  <p>
                    Our services include risk assessment, data protection, 
                    identity and access management, and continuous monitoring 
                    to detect and mitigate threats in real time. We also 
                    provide incident response, secure infrastructure, and 
                    employee awareness training to reduce vulnerabilities 
                    and strengthen resilience.
                  </p>
                  <p>
                    With our end-to-end security solutions, businesses can 
                    minimize risks, maintain compliance, and ensure business 
                    continuity in an evolving threat landscape.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/pic6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img
                    src="images/pic5.png"
                    alt="User Experience (UX) Design Services<"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Change Management Service</h3>
                  <p>
                    We help organizations navigate the cultural, structural, 
                    and operational shifts that come with digital transformation. 
                    Our change management services focus on smooth transitions, 
                    employee engagement, and adoption strategies that minimize 
                    disruption and accelerate results.
                  </p>
                  <p>
                    By fostering open communication, addressing resistance, 
                    and aligning initiatives with business objectives, 
                    we drive higher adoption rates, improved morale, 
                    and faster time to value. With a focus on sustainability, 
                    we embed change into organizational culture, 
                    ensuring long-term success and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Automation and Robotics Services</h3>
                  <p>
                    We design and implement automation and robotic process 
                    automation (RPA) solutions that streamline workflows, 
                    reduce manual effort, and boost efficiency.
                  </p>
                  <p>
                    Our services help businesses cut costs, improve accuracy, 
                    enhance safety, and scale operations with ease. 
                    By enabling 24/7 productivity and generating 
                    actionable insights, automation drives faster time to market, 
                    innovation, and long-term competitive advantage.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/pic6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_padding2">
          <div class="container  ">
            <div class="row">
              <div class="col-md-6 ">
                <div class="img-box">
                  <img
                    src="images/pic5.png"
                    alt="Mobile App Development Services"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Mobile App Development Services</h3>
                  <p>
                    We design and develop mobile applications that extend 
                    digital capabilities to mobile devices, meeting the 
                    demands of today’s mobile-first users.
                  </p>
                  <p>
                    Our apps enhance customer engagement, boost brand 
                    visibility, and deliver seamless user experiences 
                    that drive loyalty and revenue. With built-in 
                    analytics, offline functionality, and real-time 
                    communication, we help businesses improve efficiency, 
                    gain insights, and stay competitive. Scalable 
                    and adaptable, our solutions evolve with your 
                    business to ensure lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about2_section layout_padding2">
          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <div class="detail-box">
                  <h3>Training and Support Services</h3>
                  <p>
                    We provide tailored training programs and ongoing 
                    support to ensure employees can fully leverage 
                    digital solutions for maximum impact.
                  </p>
                  <p>
                    Our services enhance workforce skills, boost productivity, 
                    and foster adaptability in a rapidly changing digital 
                    landscape. By investing in employee development, 
                    we help businesses improve performance, reduce turnover, 
                    ensure compliance, and deliver better customer 
                    experiences—driving long-term growth and 
                    strengthening brand reputation.
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="img-box">
                  <img src="images/pic6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
