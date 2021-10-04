import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import EditProfilePopup from "./components/EditProfilePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import AddPlacePopup from "./components/AddPlacePopup";
import api from "./utils/api";
import avatar from "./images/avatar.png";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  // Context for Current User
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: avatar,
  });

  const [cards, setCards] = useState([]);

  // Popup States
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    useState(false);

  const [isPreviewImagePopupOpen, setIsPreviewImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleConfirmDeleteClick = () => setIsConfirmDeletePopupOpen(true);

  // Image preview
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPreviewImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setIsPreviewImagePopupOpen(false);
  };

  // load the project with cards and user information
  useEffect(() => {
    api
      .getAppInfo()
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  // API CALLS
  const handleCardLike = (card) => {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((e) => console.error(e));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser({ name, about, ...userData });
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setUserAvatar(avatar)
      .then((userData) => {
        setCurrentUser({ avatar, ...userData });
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addCard({ name, link })
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onConfirmDeleteClick={handleConfirmDeleteClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          name="confirm"
          title="Are you sure?"
          buttonText="Yes"
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isPreviewImagePopupOpen}
          name="preview"
        />
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
