import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children } = props;
  const rootId = document.getElementById("root");
  return (
    <>
      {children &&
        rootId &&
        createPortal(
          <div className={styles.modalContainer}>
            <div className={styles.modalWrapper}>{children}</div>
          </div>,
          rootId
        )}
    </>
  );
};

export default Modal;
