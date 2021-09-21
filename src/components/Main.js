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
          <div
            className="profile__avatar-overlay"
            onClick={onEditAvatarClick}
          ></div>
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
            onClick={onEditProfileClick}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="Add button"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
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
