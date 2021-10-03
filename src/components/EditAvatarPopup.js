import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, closeAllPopups, onUpdateAvatar }) => {
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const avatar = avatarRef.current.value;

    onUpdateAvatar({
      avatar,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      closeAllPopups={closeAllPopups}
      name="profile-avatar"
      title="Change profile picture"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_type_image-link"
          placeholder="Avatar link"
          id="avatar-input"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error avatar-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
