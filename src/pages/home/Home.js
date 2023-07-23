import React from "react";
import Layout from "../../components/layout/Layout";
import "./styles.css";
import { Link } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery.js";
import Anil from "../../assets/members/ANIL.jpg";
import hod from "../../data/assets/members/hod.jpg";
import logo from "../../assets/logo1.png";
import wheel from "../../assets/gallery/wheel.svg";
import headerimg from "../../assets/gallery/hero-img.jpg";
import studymtr from "../../assets/project/material.svg";
import eventimg from "../../assets/project/event.svg";
import alumniimg from "../../assets/project/alumni.svg";
const Home = () => {
  return (
    <Layout title={"Home-SOMES"}>
      <div className="header-container">
        <div className="header-content">
          <h1>
            Mech <span>Makes</span> My <span>Mind</span>
          </h1>
          <p>And My Mind Makes Machine!!!</p>
          <button>
            <a href="#about" className="text-white text-decoration-none">
              Learn More
            </a>
          </button>
        </div>
        <div className="header-image-container">
          <img
            src={headerimg}
            alt=""
            className="header-image"
          />
          <img src={wheel} alt="" className="wheel" />
        </div>
      </div>
     
      {/* About us section */}

      <div className="row about-container" id="about">
        <div className="col-lg-8 about-content   order-md-1 order-sm-2">
          <h1>About-Us</h1>
          <p>
            The{" "}
            <strong>SOCIETY OF MECHANICAL ENGINEERING STUDENTS (SOMES)</strong>{" "}
            is the non-political and non-profitable organisation of Department
            of Mechanical Engineering, Purwanchal Campus. Established in 2013,
            SOMES has been uplifting the educational experience at Purwanchal
            Campus through engaging events, impactful training programs, and
            strong connections with alumni and the administration. The
            organisation aims to create an environment that fosters innovation,
            leadership qualities, and prepares students for successful career in
            mechanical engineering.
          </p>
        </div>
        <div className="col-lg-4 about-image  order-md-2 order-sm-1">
          <img
            src={logo}
            alt="Loading"
            className="img-fluid"
           
          />
        </div>
      </div>
    
      {/* MESSAGE FROM PRESIDENT */}

      <div className="row  president-msg-container">
        <div className="col-lg-8  president-msg">
          <h1>Message From President</h1>

          <p>
            Warm greetings, myself Anil Dangi, current president at{" "}
            <strong>SOMES</strong>, Hailing from the beautiful region of Jumla,
            I bring with me a unique perspective and a deep appreciation for the
            rich cultural diversity that exists within our campus community. The
            atmosphere of Purwanchal Campus has played a significant role in
            shaping my journey and igniting my love for mechanical engineering.
            At SOMES, we strive to create a vibrant community where members can
            excel in their knowledge, skills, and overall professional
            development in mechanical engineering. We believe in the power of
            sharing what we know, and I am committed to fostering an inclusive
            environment that values diverse backgrounds and experiences. Thank
            you for being a part of SOMES, and I am excited to embark on this
            remarkable journey with all of you.
          </p>
        </div>
        <div className="col-lg-4 president-image">
          <img src={Anil} alt="" className="img-fluid president-img" />
          <h5 className="text-center">Mr. Anil Dangi</h5>
          <h6 className="text-center text-muted">PRESIDENT of SOMES</h6>
        </div>
      </div>
    
      <div className="row  hod-msg-container">
      <div className="col-lg-4 hod-image">
          <img src={hod} alt="" className="img-fluid hod-img" />
          <h5 className="text-center">PROF. ROSHAN GHIMIRE</h5>
          <h6 className="text-center text-muted">
            HOD of Mechanical Department
          </h6>
        </div>
        <div className="col-lg-8  hod-msg">
          <h1>Message From HOD</h1>

          <p>
            Students, I am thrilled to announce MechCamp, the grand event
            organized by the Mechanical Society (SOMES) in our department.
            MechCamp is a unique opportunity for mechanical engineering
            enthusiasts to showcase their skills, exchange ideas, and ignite
            their passion for the field. With engaging workshops, technical
            sessions, guest lectures by industry experts, and hands-on
            activities, MechCamp promises an unforgettable learning experience.
            SOMES, our esteemed Mechanical Society, plays a vital role in
            organizing MechCamp and creating a supportive community for
            mechanical engineering students. By participating in SOMES, you can
            enhance your academic journey through competitions, seminars, and
            industry interactions. Our department takes pride in providing a
            comprehensive curriculum led by experienced faculty members. With
            state-of-the-art labs and cutting-edge research facilities, we
            ensure that you receive a well-rounded education and stay at the
            forefront of mechanical engineering advancements. Make the most of
            the resources available to you, engage in research projects,
            internships, and industry collaborations. MechCamp is just one of
            the avenues we offer to foster your growth and keep you updated with
            the latest developments in the field. I encourage you to actively
            participate in MechCamp and seize this extraordinary opportunity.
            Together, let's ignite our passion, expand our horizons, and make
            significant contributions to the world of mechanical engineering.
          </p>
        </div>
      
      </div>
     
      <div className="container">
        <div className="row g-3">
          <h3 style={{textAlign:"center"}}> Quick Visits </h3>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow hover-overlay">
              <img
                src={studymtr}
                height="250px"
               
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Study Materials</h5>
                <p className="card-text text-black-50">
                  All notes available with youtube links.
                </p>
                <Link to="/notes" className="btn btn-outline-primary btn-sm">
                Visit &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow ">
              <img
                src={eventimg}
                height="250px"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">MechCamp 2.0</h5>
                <p className="card-text text-black-50">
                  Grand Event that SOMES organizes annually.
                </p>
                <Link to="/events" className="btn btn-outline-primary btn-sm">
                Visit &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow">
              <img
                src={alumniimg}
                alt=""
                height="250px"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Alumni</h5>
                <p className="card-text text-black-50">Here you can add or see the list of passout seniors.</p>
                <Link to="/alumni" className="btn btn-outline-primary btn-sm">
                  Visit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      <h2 className="d-flex font-roboto justify-content-center crousel-content my-5">
        Some Glimpses Of Mech-Camp
      </h2>
      <Gallery />
     
    </Layout>
  );
};

export default Home;
