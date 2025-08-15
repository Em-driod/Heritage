import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Reusable Modal Component
interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (show) {
      document.body.style.overflow = 'hidden'; // Prevents scrolling
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup function to remove the event listener and restore scroll
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = '';
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white shadow-4xl rounded-lg p-4 m-4 max-w-3xl w-full relative">
        <div className="absolute top-2 right-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
        </div>
        <div className="text-gray-600 space-y-4">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;