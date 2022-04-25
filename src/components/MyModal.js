import React from "react";
import { createPortal } from "react-dom";
import "./MyModal.css";

const MyModal = ({ children }) => {
  const Backdrop = ({ children }) => {
    return <div className="backdrop">{children}</div>;
  };

  const Modal = ({ children }) => {
    return <div className="myModal">{children}</div>;
  };

  const idModal = document.getElementById("modalQ");
  return (
    <>
      {createPortal(
        <Backdrop>
          <Modal>{children}</Modal>
        </Backdrop>,
        idModal
      )}
    </>
  );
};

export default MyModal;
