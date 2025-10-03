import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button
          onClick={onClose}
          className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}
