const ImagePopup = ({ name, card, onClose }) => {
  return (
    <section className={`popup popup_type_${name}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button
          type="button"
          className="popup__close-button popup__close-button_preview"
          aria-label="Close button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card} alt="preview" />
        <p className="popup__preview-title"></p>
      </div>
    </section>
  );
};

export default ImagePopup;
