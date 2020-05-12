import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  const userName = JSON.parse(localStorage.getItem('redux')).name;
  return (
    <div className="more">
      <div className="row more-list">
        <div className="col-4 container">
          <div className="img-circle hor">
            <img src={`https://robohash.org/${userName}?set=set2`} alt="Profile" />
          </div>
        </div>
        <div className="col-8 container profile-content">
          <strong className="profile-name">{userName}</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faCrosshairs} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Your Target</strong>
        </div>
      </div>
    </div>
  );
};

export default Settings;
