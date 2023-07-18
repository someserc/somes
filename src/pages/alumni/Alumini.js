import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./Form";
import "./Alumini.css";

const Alumni = () => {
  const openLink = (event) => {
    event.preventDefault();
    const url =
      "https://docs.google.com/spreadsheets/d/1Z-XhVwVJhmBS59JZf48vlpo75KVpERUT2OlbXQmbI80/edit?resourcekey#gid=1298547366";
    window.open(url, "_blank");
  };

  return (
    <Layout title={"Alumni-SOMES"}>
      <div className="alumini_content mx-4 shadow mb-2">
        <h3 className="shadow">IOE Purwanchal Campus,BME-Alumni Database</h3>
        <p className="mx-4">
          Join us in an exciting endeavor as the Society of Mechanical
          Engineering Students (SOMES), a vibrant organization of IOE Purwanchal
          Campus BME students, takes the lead in launching a compelling data
          collection campaign for our esteemed alumni. Our primary objective is
          to establish a powerful alumni network that fosters connections and
          creates valuable opportunities.
          <br />
          We understand the immense potential and influence our alumni possess.
          By participating in this campaign, you can contribute to the
          development of a thriving community that supports professional growth
          and collaboration for both current and former students.
        </p>
        <br />
        <p>
          We kindly request your support by providing us with the following
          information:{" "}
        </p>
        <button onClick={openLink} className="btn btn-primary mb-4">
          View Report
        </button>
      </div>
      <Form />
    </Layout>
  );
};

export default Alumni;
