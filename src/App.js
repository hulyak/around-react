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

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAppInfo().then(([userData, cards]) => {
      setCurrentUser(userData);
      setCards(cards);
    });
  }, []);

  const handleCardLike = (card) => {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDelete = () => {
    api.deleteCard(selectedCard._id).then(() => {
      setSelectedCard({});
      setIsConfirmDeletePopupOpen(false);
    });
  };

  const handleUpdateUser = () => {
    api.setUserInfo(currentUser.name, currentUser.about).then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = () => {
    api.setUserAvatar(currentUser.avatar).then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    });
  };

  const handleAddPlaceSubmit = () => {
    const { name, link } = currentUser;
    api.addNewCard(name, link).then((card) => {
      setCards([...cards, card]);
      closeAllPopups();
    });
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
          name="confirm"
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
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
