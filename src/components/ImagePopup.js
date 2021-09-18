const ImagePopup = () => {
  return (
    <section className="popup popup_type_preview">
      <div className="popup__container popup__container_preview">
        <button
          type="button"
          className="popup__close-button popup__close-button_preview"
          aria-label="Close button"
        ></button>
        <img className="popup__image" src="#" alt="preview image" />
        <p className="popup__preview-title"></p>
      </div>
    </section>
  );
};

export default ImagePopup;
