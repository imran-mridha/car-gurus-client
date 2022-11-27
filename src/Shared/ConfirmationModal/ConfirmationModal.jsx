import React from "react";

const ConfirmationModal = ({title, message,successBtnName,closeModal,modalData,successAction}) => {
  return (
    <div>
      {/* <label htmlFor="confirmation-modal" className="btn">
        open modal
      </label> */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label 
            onClick={()=>successAction(modalData)}
            htmlFor="confirmation-modal" className="btn bg-primary border border-primary hover:bg-secondary hover:border-secondary">
              {successBtnName}
            </label>
            <label 
            onClick={closeModal}
            className="btn btn-outline">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
