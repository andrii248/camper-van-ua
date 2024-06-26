import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handelKeyUp = e => {
      if (e.code === 'Escape') {
        addCloseClass();
        onClose();
      }
    };

    window.addEventListener('keydown', handelKeyUp);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handelKeyUp);
      document.documentElement.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      addCloseClass();
      onClose();
    }
  };

  const addCloseClass = () => {
    const Overlay = document.querySelector('#CloseAnimateOverlay');
    const Modal = document.querySelector('#CloseAnimateModal');
    Overlay.classList.add(`${s.CloseAnimate}`);
    Modal.classList.add(`${s.CloseAnimate}`);
  };

  return createPortal(
    <div
      id="CloseAnimateOverlay"
      className={s.Overlay}
      onClick={handleBackdropClick}
    >
      <div id="CloseAnimateModal" className={s.Modal}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
