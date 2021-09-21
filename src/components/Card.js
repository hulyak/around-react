const Card = ({ card, onCardClick }) => {
  return (
    <>
      <li className="element" key={card._id}>
        <button
          className="element__delete-button"
          aria-label="Delete button"
          type="button"
        ></button>
        <div
          className="element__image"
          style={{ backgroundImage: `url(${card.link})` }}
          onClick={() => onCardClick(card)}
        ></div>
        <div className="element__flex">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-wrapper">
            <button type="button" className="element__like-button"></button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
