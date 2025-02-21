import "./modal.css";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from "@mui/material/Button";

export default function PortalExample(props) {
  const [showModal, setShowModal] = useState(false);

  // Appeler la fonction qui est passée en prop, si elle existe
  const handleButtonClick = () => {
    if (props.onOpen) {
      const isValid = props.onOpen(); 
      if (!isValid) return; 
    }
    setShowModal(true); 
  };
  return (
    <>
      <Button variant='contained' onClick={handleButtonClick}>{props.nameButton}</Button>
      {showModal && createPortal(
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div>{props.texteModal}</div>
            <Button variant='contained' onClick={() => setShowModal(false)}>Close</Button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
