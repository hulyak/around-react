import React from "react";

const EditProfilePopup = () => {
  return (
    <label className="popup__form-field">
      <input
        type="url"
        name="avatar"
        className="popup__input popup__input_type_image-link"
        placeholder="Avatar link"
        id="avatar-input"
        required
      />
      <span className="popup__input-error avatar-input-error" />
    </label>
  );
};

export default EditProfilePopup;
