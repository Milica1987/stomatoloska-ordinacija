
import "@styles/Dialog.scss";

/* eslint-disable react/prop-types */

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <button className="close-button" onClick={handleClose}>X</button>
        {children}
        <button className="ok-button" onClick={handleClose}>OK</button>
      </div>
    </div>
  );
};

export default Dialog;

