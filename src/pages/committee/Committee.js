import React from "react";
import Layout from "../../components/layout/Layout";
import { FaFacebook, FaPhone, FaMailBulk } from "react-icons/fa";
import "./committee.css";
import datas from "../../data/members/member.js";
import president from "../../assets/members/ANIL.jpg";
import { Link } from "react-router-dom";
const Committee = () => {
  return (
    <Layout title={"Committee-SOMES"}>
      <div id="committe">
        <div className="somes_committe">
          <h1 className="model-title">Our Team</h1>
          <h2>SOMES 2080</h2>
          <h3>Executive Committee</h3>
        </div>
        <div className="members">
          <div className="president">
            <div className="member">
              <img width={150} height={150} src={president} alt="Loading.." />
              <div className="description">
                <h1>Anil Dangi</h1>
                <h2>President</h2>
                <div className="social-media">
                  <Link
                    to={`http://www.facebook.com/profile.php?id=100067051394183`}
                    target="_blank"
                  >
                    {" "}
                    <FaFacebook />
                  </Link>
                  <Link to={`tel:9863450956`} target="_blank">
                    <FaPhone />
                  </Link>
                  <Link to={`mailto:Rolayak297@gmail.com`} target="_blank">
                    {" "}
                    <FaMailBulk />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="gmember">
            {datas.map((member) => {
              return (
                <div className="member" key={member.id}>
                  <img
                    width={150}
                    height={150}
                    src={member.face}
                    alt="Loading ..."
                  />
                  <div className="description">
                    <h1>{member.name}</h1>
                    <h2>{member.position}</h2>
                    <div className="social-media">
                      <Link
                        to={`http://www.facebook.com/${member.facebook}`}
                        target="_blank"
                      >
                        {" "}
                        <FaFacebook />
                      </Link>
                      <Link to={`tel:${member.phone}`} target="_blank">
                        <FaPhone />
                      </Link>
                      <Link to={`mailto:${member.email}`} target="_blank">
                        {" "}
                        <FaMailBulk />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Committee;
