import React from "react";
import "./ProfileCard.css";
import UserInfo from "../userinfo/UserInfo";
import Achievement from "../achievements/Achievement";
import Buttons from "../buttons/Buttons";

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png"
          alt="card-img"
        />
        <div className="profile-card-info">
          <UserInfo />
          <Achievement />
        </div>
      </div>      
      <Buttons />
    </div>
  );
};

export default ProfileCard;
