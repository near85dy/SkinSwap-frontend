import React, { useEffect, useState } from 'react';
import { getLocalUser, setTradeLink } from "../services/api";

const API_URL = "http://localhost:8080/api";

const MyProfile = () => {    
    const [profileData, setProfileData] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await fetch(API_URL+ "/profile", {
              method: 'GET',
              headers: { 
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            if (!response.ok) {
              throw new Error('Failed to fetch profile');
            }
            const data = await getLocalUser();
            setProfileData(data);  

          } catch (err) {
            setError(err.message);  
          }
        };
    
        fetchProfile();
      }, [])

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) =>
    {
      setInputValue(event.target.value)
    }

    function checkInputButton()
    {
      setTradeLink(inputValue);
    }

    return(
      <div className="profile">
          {error ? (
              <p>Error: {error}</p>
          ) : !profileData ? (
              <p>Loading...</p> 
          ) : (
              <img src={profileData.avatar} alt="Profile Avatar" /> 
          )}
          {error ? (
              <p>Error: {error}</p>
          ) : (
            <form>
                <input type="text" value = {inputValue} onChange={handleChange}/>
                <button onClick={checkInputButton}>Enter</button>
            </form>
          )}
      </div>
    )
}

export default MyProfile