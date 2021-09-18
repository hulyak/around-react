import React from "react";

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) => {
  return (
    <main>
      <section className="profile">
        <div>
          <div className="profile__avatar-overlay"></div>
          <img
            src=""
            alt="old person with a red hat smiling to camera"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit-button"
            aria-label="edit button"
            type="button"
          ></button>
          <p className="profile__job">Explorer</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="Add button"
          type="button"
        ></button>
      </section>

      <section className="popup popup_type_profile-avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button popup__close-button_avatar"
            aria-label="Close button"
          ></button>
          <form
            name="avatar"
            className="popup__form popup__form_type_edit-profile-avatar"
            noValidate
          >
            <h3 className="popup__title">Change profile picture</h3>
            <label className="popup__form-field">
              <input
                type="url"
                name="avatar"
                className="popup__input popup__input_type_image-link"
                placeholder="Avatar link"
                id="avatar-input"
                required
              />
              <span className="popup__input-error avatar-input-error"></span>
            </label>
            <button
              type="submit"
              className="popup__button"
              aria-label="Save Button"
            >
              Save
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_confirm">
        <div className="popup__container popup__container_confirmation">
          <button
            type="button"
            className="popup__close-button popup__close-button_confirm"
            aria-label="Close button"
          ></button>
          <form name="card" className="popup__form popup__form_type_confirm">
            <p className="popup__title">Are you sure?</p>
            <button
              type="submit"
              className="popup__button"
              aria-label="Confirm Button"
            >
              Yes
            </button>
          </form>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>

      <template id="cards-template">
        <li className="element">
          <button
            className="element__delete-button"
            aria-label="Delete button"
            type="button"
          ></button>
          <div className="element__image"></div>
          <div className="element__flex">
            <h2 className="element__text"></h2>
            <div className="element__like-wrapper">
              <button type="button" className="element__like-button"></button>
              <p className="element__like-count"></p>
            </div>
          </div>
        </li>
      </template>
    </main>
  );
};

export default Main;
