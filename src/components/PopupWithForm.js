import React from "react";

// "Edit profile";
// "New place";
// "Update profile picture";
// "Are you sure?"
const PopupWithForm = ({ title, name, isOpen }) => {
  return (
    <section className={`popup popup_type_${name}`}>
      <div className={`popup__container ${isOpen} ? 'popup_is-opened' : ''`}>
        <button
          type="button"
          className="popup__close-button popup__close-button_profile"
          aria-label="Close button"
        ></button>
        <form
          name={name}
          className={`popup__form popup__form_type_${name}`}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          <label className="popup__form-field">
            <input
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="name"
              minLength="2"
              maxLength="40"
              id="name-input"
              required
            />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              type="text"
              name="about"
              className="popup__input popup__input_type_job"
              placeholder="Job"
              minLength="2"
              maxLength="200"
              id="job-input"
              required
            />
            <span className="popup__input-error job-input-error"></span>
          </label>
          <button type="submit" className="popup__button">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopupWithForm;
