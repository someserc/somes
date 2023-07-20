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
      </MDBRow>
      <MDBModal show={modalOpen} onHide={closeModal}>
        <MDBModalBody>
          {selectedImage && (
            <>
              <button onClick={closeModal} className="btn btn-success">
                Close
              </button>

              <img
                src={selectedImage}
                className="w-100  modal-img"
              
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
