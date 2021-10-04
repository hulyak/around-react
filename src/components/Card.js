import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  // const { _id, name, description, imageUrl, isConfirmed } = card;

  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  // Check if the card was liked by the current user
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const handleLikeClick = () => {
    onCardLike(card._id);
  };

  return (
    <>
      <li className="element">
        <button
          className={`${
            isOwn
              ? "element__delete-button"
              : "element__delete-button_type_hidden"
          }`}
          aria-label="Delete button"
          type="button"
          onClick={() => onCardDelete(card._id)}
        />
        <div
          className="element__image"
          style={{ backgroundImage: `url(${card.link})` }}
          onClick={() => onCardClick(card)}
        />
        <div className="element__flex">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-wrapper">
            <button
              type="button"
              className={`element__like-button ${
                isLiked ? "element__like-button_active" : "element__like-button"
              }`}
              onClick={handleLikeClick}
            />
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
