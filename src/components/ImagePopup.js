import { useRef } from "react";

const ImagePopup = ({ name, isOpen, card, onClose }) => {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose(e);
    }
  };
  return (
    <section
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      ref={modalRef}
      onClick={handleOutsideClick}
    >
      <div className={`popup__container popup__container_${name}`}>
        <button
          type="button"
          className="popup__close-button popup__close-button_preview"
          aria-label="Close button"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={"" || card.link}
          alt="bigger size of the card with its link and name"
        />
        <p className="popup__preview-title">{card.name}</p>
      </div>
    </section>
  );
};

export default ImagePopup;
