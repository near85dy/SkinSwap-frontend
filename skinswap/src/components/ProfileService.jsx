import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileService = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const API_URL = "http://localhost:8080/api";

  let newid = id;
  if(id == null) 
  {
    newid = "";  
  }
  else
  {
    newid = "/"+id;
  }

  console.log(`${API_URL}/profile${newid}`);
  useEffect(() => {
    axios.get(`${API_URL}/profile${newid}`)
      .then(response => {
        setUser(response.data); // Automatically parsed into an object
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <a>Steam ID: {user.steamid}</a>
      <a>Username: {user.username}</a>
      <img 
        id="user-avatar" 
        alt="User Avatar" 
        src={user.avatar} 
      />
    </div>
  );
};

export default ProfileService;