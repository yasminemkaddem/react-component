import React from "react";
import './myProfile.css';
import photo from './photo.jpg'

const ProfilePhoto = () => {
    return (
        <img className="Profile-img" src={photo} alt="img" />
    )
}

export default ProfilePhoto;