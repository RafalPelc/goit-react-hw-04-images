import { useEffect } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  const handleImageClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleImageClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" width={1000} height={700} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: propTypes.func,
  largeImageURL: propTypes.string.isRequired,
};
