import { createContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onConfirmDeleteClick }) => {
  // const { _id, name, description, imageUrl, isConfirmed } = card;

  const currentUser = createContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const handleLikeClick = () => {
    if (isLiked) {
      onCardClick(card._id, {
        ...card,
        likes: card.likes.filter((i) => i._id !== currentUser._id),
      });
    } else {
      onCardClick(card._id, {
        ...card,
        likes: [...card.likes, currentUser],
      });
    }
  };

  return (
    <>
      <li className="element">
        <button
          className={`element__delete-button ${
            isOwn
              ? "element__delete-button"
              : "element__delete-button_type_hidden"
          }`}
          aria-label="Delete button"
          type="button"
          onClick={() => onConfirmDeleteClick(card._id)}
        />
        <div
          className="element__image"
          style={{ backgroundImage: `url(${card.link})` }}
          onClick={() => onCardClick(card)}
        />
        <div className="element__flex">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-wrapper">
            <button type="button" className="element__like-button" />
            <p className="element__like-count" onCardLike={handleLikeClick}>
              {card.likes.length}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
