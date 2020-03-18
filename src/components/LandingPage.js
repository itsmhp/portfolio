import React from "react";
import "../App.css";
import profileImage from "../img/alcatraz-black.png";

function LandingPage() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <h3 id="text02">Hanif Pratama</h3>
          <p id="text01">UI/UX Designer</p>

          <div
            id="image01"
            class="image full"
            data-position="center"
            bis_skin_checked="1"
          >
            <img src={profileImage} alt="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
