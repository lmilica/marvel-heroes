import React, { useState } from "react";
import Modal from "react-modal";
import "./Comics.scss";

const Comics = ({ title, image, display }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
    <div id="Comics__comic-book-wrapper" className="col-lg-2" onClick={() => setModalIsOpen(true)}>
      <div className={`${display ? "displayComics" : "hideComics"}`}>
        <p className="col-lg-12 col-md-12 col-sm-12 col-12">{title}</p>
        <img alt="Hero comic" src={image} />
      </div>
    </div>

    <Modal 
    className='Info__modal'
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    ariaHideApp={false}>
      
      <img src={image} alt='comic'></img>
    </Modal>
    </>
  );
};
export default Comics;
