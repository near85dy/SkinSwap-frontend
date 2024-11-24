import React, { useEffect, useState } from 'react';
import { getLocalUser, setTradeLink } from "../services/api";

const API_URL = "http://localhost:8080/api";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getLocalUser();
        if (!data) {
          throw new Error('No profile data returned');
        }
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkInputButton = async () => {
    try {
      await setTradeLink(inputValue);
      alert('Trade link updated successfully!');
    } catch (err) {
      console.error('Failed to update trade link:', err);
    }
  };

  return (
    <div className="profile-container">
      {error ? (
        <p className="error">Error: {error}</p>
      ) : !profileData ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="profile-card">
          <div className="profile-left">
            <img
              src={profileData.avatar || 'default-avatar.jpg'}
              alt="Profile Avatar"
              className="profile-avatar"
            />
            <div className="profile-info">
              <h3>{profileData.username}</h3>
              <p>ID: {profileData.id}</p>
            </div>
          </div>
          <div className="profile-right">
            <p>
              Trade link:{" "}
              <a href={profileData.tradeLink} target="_blank" rel="noopener noreferrer">
                {profileData.tradeLink}
              </a>
            </p>
            <p>Skins count: {profileData.skinsCount}</p>
            <p>Full inventory price: ${profileData.inventoryPrice}</p>
          </div>
        </div>
      )}

      <form className="trade-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter new trade link"
        />
        <button type="button" onClick={checkInputButton}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
