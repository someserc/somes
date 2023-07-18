import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import gData from "../../data/gallery/gallery.js";
import { MDBCol, MDBRow, MDBModal, MDBModalBody } from "mdb-react-ui-kit";

const Gal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
  return (
    <Layout title={"Gallery-SOMES"}>
      <div className="gallery-title">
        <h1 className="text-center shadow-sm my-5">Mech-Camp 2.0 Gallery</h1>
      </div>
      <MDBRow>
        {
          gData.map((data)=>{
             return<MDBCol lg={4} md={12} key={data.id} className="mb-4 mb-lg-0">
            <img
              src={data.image}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
              height={400}
              onClick={() => openModal(`${data.image}`)}
            />
            </MDBCol>
          })
        }
        {/* <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="./image/gallery/jeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            onClick={() => openModal("./image/gallery/jeep.jpg")}
          />

          <img
            src="./image/gallery/camera.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="mechcamp"
            onClick={() => openModal("./image/gallery/camera.jpg")}
          />
          <img
            src="./image/gallery/fifa.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/fifa.jpg")}
            alt="Boat on Calm Water"
          />
          <img
            src="./image/gallery/trio.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/trio.jpg")}
            alt="Boat on Calm Water"
          />
          <img
            src="./image/gallery/roboball.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/roboball.jpg")}
            alt="Boat on Calm Water"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="./image/gallery/lamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/lamp.jpg")}
            alt="Mountains in the Clouds"
          />

          <img
            src="./image/gallery/vintageJeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/vintageJeep.jpg")}
            alt="mechcamp"
          />
          <img
            src="./image/gallery/fifa2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/fifa2.jpg")}
            alt="mechcamp"
          />
          <img
            src="./image/gallery/mechcamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/mechcamp.jpg")}
            alt="mechcamp"
          />
          <img
            src="./image/gallery/football.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/football.jpg")}
            alt="mechcamp "
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="./image/gallery/ouch.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/ouch.jpg")}
            alt="Waves at Sea"
          />

          <img
            src="./image/gallery/dragon.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/dragon.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="./image/gallery/tt.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/tt.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="./image/gallery/group.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/group.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="./image/gallery/slide.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("./image/gallery/slide.jpg")}
            alt="mechcamp"
          />
        </MDBCol> */}
      </MDBRow>
      <MDBModal show={modalOpen} onHide={closeModal}>
        <MDBModalBody>
          {selectedImage && (
            <>
              <button onClick={closeModal} className="btn btn-primary">
                Close
              </button>

              <img
                src={selectedImage}
                className="w-100 modal-img"
                alt="Zoomed"
              />
            </>
          )}
        </MDBModalBody>
      </MDBModal>
    </Layout>
  );
};

export default Gal;
