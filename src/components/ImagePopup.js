const ImagePopup = ({ name, children, onClose }) => {
  return (
    <section className={`popup popup_type_${name}`}>
      <div className={`popup__container popup__container_{name}`}>
        <button
          type="button"
          className="popup__close-button popup__close-button_preview"
          aria-label="Close button"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </section>
  );
};

export default ImagePopup;
