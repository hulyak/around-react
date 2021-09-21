import React, { useEffect, useState } from "react";
import api from "../utils/api";
import avatar from "../images/avatar.png";
import Card from "./Card";

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) => {
  const [userName, setUserName] = useState("Hulya");
  const [userDescription, setUserDescription] = useState("Frontend Developer");
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData().then(({ name, avatar, about }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    });

    api.getInitialCards().then((cards) => {
      console.log(cards);
      setCards(cards);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div>
          <div className="profile__avatar-overlay"></div>
          <img
            src={userAvatar}
            alt="old person with a red hat smiling to camera"
            className="profile__avatar"
            // style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            aria-label="edit button"
            type="button"
          ></button>
          <p className="profile__job">{userDescription}</p>
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
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
