import React, { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FcStart, FcDownload } from "react-icons/fc";
import Layout from "../../components/layout/Layout";
import style from "../../style/notes/note.module.css";
import notes from "../../data/notes/note.json";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Notes = () => {
  const [sem, setsem] = useState("I");

  const data = notes["year"];
  const note_data = data[`${sem}`];
 
     
  

  return (
    <Layout title={"Notes-SOMES"}>
     
      <div className={style.note_head}>
        <h3 className="shadow-sm">BE MECHANICAL STUDY MATERIALS</h3>
        <select
          className={`form-select form-select-sm`}
          aria-label=".form-select-sm example"
          id="semValue"
          onChange={(e) => {
            setsem(e.target.value);
          }}
        >
          <option value="I">Select Semester</option>
          <option value="I">I Sem</option>
          <option value="II">II Sem</option>
          <option value="III">III Sem</option>
          <option value="IV">IV Sem</option>
          <option value="V">V Sem</option>
          <option value="VI">VI Sem</option>
          <option value="VII">VII Sem</option>
          <option value="VIII">VIII Sem</option>
        </select>
      </div>

      <div className={style.semeter_St}>
        <div className={style.note_main}>
          <h3>{note_data.name}</h3>

          <div className={style.notes_subj}>
            {note_data.Subjects.map((sub) => {
              return (
                <div
                  key={sub.id}
                  className={`card shadow-lg p-3 bg-light shadow-lg mb-5 ${style.subjects}`}
                  style={{ width: "18rem", height: "11rem" }}
                >
                  <div className="card-header text-bold ">
                    <CiBookmarkCheck />
                    {sub.name}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title "> Follow Links </h5>
                    <div className="d-flex text-transparent bg-body my-3 justify-content-around ">
                      <Link to={sub.youtube} target="_blank">
                        <FcStart />
                      </Link>

                      <Link to={sub.drive} target="_blank">
                        <FcDownload />
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

export default Notes;
