import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isClosePopup, setIsClosePopup] = useState(true);
  const [selectedCard, setSelectedCard] = useState(false);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = () => setSelectedCard(true);

  const closeAllPopups = () => setIsClosePopup(true);

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="profile-avatar"
        title="Change profile picture"
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
      >
        <label class="popup__form-field">
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

        <label class="popup__form-field">
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
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        // isOpen={isClosePopup}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onClick={handleCardClick}
        name="preview"
      >
        <img className="popup__image" src="#" alt="preview" />
        <p className="popup__preview-title"></p>
      </ImagePopup>
      <Footer />
    </>
  );
}

export default App;
