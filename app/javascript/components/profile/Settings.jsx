import React from 'react';

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
    </div>
  );
};

export default Settings;
