import React, { useEffect, useState } from 'react';
import { getLocalUser, setTradeLink } from '../services/api';

const API_URL = "http://localhost:8080/api";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isEditingTradeLink, setIsEditingTradeLink] = useState(false); // Toggle editing state

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getLocalUser();
        if (!data) throw new Error('No profile data returned');
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
      setIsEditingTradeLink(false); // Exit editing state
      setProfileData({ ...profileData, tradeLink: inputValue }); // Update UI with the new trade link
    } catch (err) {
      console.error('Failed to update trade link:', err);
    }
  };

  const toggleEditTradeLink = () => {
    setIsEditingTradeLink(!isEditingTradeLink); // Toggle between editing and viewing state
  };

  return (
    <div className="profile-container">
      {error ? (
        <div className="error">Error: {error}</div>
      ) : !profileData ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="profile-card">
          <div className="profile-left">
            <img
              src={profileData.avatar || "default-avatar.jpg"}
              alt="Profile Avatar"
              className="profile-avatar"
            />
            <h3 className="profile-username">{profileData.username}</h3>
            <p>ID: {profileData.id}</p>
          </div>
          <div className="profile-right">
            <p>
              Trade link:{' '}
              {isEditingTradeLink ? (
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Enter new trade link"
                />
              ) : (
                <a
                  href={profileData.tradeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  {profileData.tradeLink || 'No trade link set'}
                </a>
              )}
            </p>
            <p>Skins count: {profileData.skinsCount || 'N/A'}</p>
            <p>
              Full inventory price: ${profileData.inventoryPrice || 'N/A'}
            </p>
            {isEditingTradeLink ? (
              <button type="button" onClick={checkInputButton}>
                Save
              </button>
            ) : (
              <button type="button" onClick={toggleEditTradeLink}>
                Change Trade Link
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
