import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import api from "./utils/api";
import avatar from "./images/avatar.png";

function App() {
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

  // User State
  const [user, setUser] = useState({
    name: "",
    about: "",
    avatar: avatar,
  });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAppInfo().then(([userData, cards]) => {
      setUser(userData);
      setCards(cards);
    });
  }, []);

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onConfirmDeleteClick={handleConfirmDeleteClick}
        cards={cards}
        user={user}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="profile-avatar"
        title="Change profile picture"
        buttonText="Save"
      >
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
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="New place"
        buttonText="Create"
      >
        <label className="popup__form-field">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_title"
            placeholder="Title"
            required
            minLength="1"
            maxLength="30"
            id="title-input"
          />
          <span className="popup__input-error title-input-error"></span>
        </label>

        <label className="popup__form-field">
          <input
            type="url"
            name="link"
            className="popup__input popup__input_type_image-link"
            placeholder="Image Link"
            required
            id="url-input"
          />
          <span className="popup__input-error url-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Edit Profile"
        buttonText="Save"
      >
        <label className="popup__form-field">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Name"
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
      </PopupWithForm>

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
    </>
  );
}

export default App;
