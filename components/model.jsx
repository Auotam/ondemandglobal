import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close </button>
        {/* Add your request form content here */}
        <iframe src="https://clienthub.getjobber.com/client_hubs/57afc737-74dd-43e4-90cc-fb6f589ec820/public/work_request/new?source=social_media" width="100%" height="100%"></iframe>
      </div>
    </div>
  );
};

export default Modal;