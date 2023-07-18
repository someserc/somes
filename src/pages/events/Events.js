import vdo from "../../assets/video/driftmud.mp4";
import presentation from "../../assets/project/presentation.jpg";
import demonstration from "../../assets/project/demonstration.jpg";
import Art from "../../assets/gallery/jeep.jpg";
import fifa from "../../assets/project/fifa.jpg";
import robo from "../../assets/project/robo.jpg";
import talk from "../../assets/project/talk.jpg";
import d3 from "../../assets/project/3d.jpg";


import React from "react";
import Layout from "../../components/layout/Layout";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import "./styles.css";

const Events = () => {
  return (
    <Layout title={"Events-SOMES"}>
      <div className="video-container  col-lg-5 ">
        <video src={vdo} autoPlay loop muted></video>
        <div className="overlay"></div>

        <div className="video-content ">
          <h2 className="text-sm text-lg">Mech-Camp 2.0</h2>
        </div>
      </div>
      <hr />
      <div className="mech-camp-content container">
        <h1 className="text-center">Mech-Camp 2.0</h1>
        <p>
          Welcome to the thrilling world of mechanical engineering! The annual
          programme MECH CAMP 2.0 organized by the Society Of Mechanical
          Engineering Society (SOMES) is an eagerly anticipated event that
          brings together passionate individuals, aspiring engineers, and
          industry professionals to celebrate the wonders of this dynamic field.
          With gears turning and innovations abounding, the camp serves as a
          platform for mechanical engineering enthusiasts to explore, learn, and
          connect with like-minded individuals.{" "}
        </p>
      </div>
      <hr />
      <div className="event-heaing  text-center">
        <h1>Our Events</h1>
      </div>
      <MDBCardGroup className="container mb-3">
        <div className="row">
          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={presentation}
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>
                  Research Idea Presentation Competition
                </MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Presenting a research idea concisely and effectively to
                  capture the interest and support of the audience."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={demonstration}
                alt="..."
                position="top"
                height="320px"
              />
              <MDBCardBody>
                <MDBCardTitle>Project Demonstration</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Showcasing the functionality, features, and outcomes of a
                  project through a live demonstration."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={talk}
                alt="..."
                height="295px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Innovation Talk</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Informative discussion that explores groundbreaking ideas,
                  and creative solutions to inspire positive change."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={d3}
                alt="..."
                position="top"
                height="320px"
              />
              <MDBCardBody>
                <MDBCardTitle>3D Modelling Competition</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Competitive event showcasing skills by creating
                  three-dimensional digital models using specialized software."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={Art}
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Junk Art Competition</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Artistic expression that involves creating recycled
                  materials, transforming trash into treasures."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={robo}
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Robo Soccer</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Autonomous robots playing soccer, showcasing AI and robotics
                  skills."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard className="card shadow">
              <MDBCardImage
                src={fifa}
                alt="..."
                height="300px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>FIFA Championship</MDBCardTitle>
                <MDBCardText className="text-black-50">
                  "Global virtual tournament showcasing gaming skills in FIFA.""
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </MDBCardGroup>
    </Layout>
  );
};

export default Events;
