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

  const handleCardClick = () => setIsAddPlacePopupOpen(true);

  const handleClosePopupClick = () => {
    setIsClosePopup(true);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClosePopupClick={handleClosePopupClick}
      />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={isClosePopup} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={isClosePopup} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={isClosePopup} />
      <ImagePopup selectedCard={selectedCard} onClose={isClosePopup} />
      <Footer />
    </>
  );
}

export default App;
