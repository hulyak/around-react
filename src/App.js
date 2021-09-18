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

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const handleCardClick = () => setIsAddPlacePopupOpen(true);
  const closeAllPopups = () => {};

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <Footer />
    </>
  );
}

export default App;
