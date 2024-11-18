
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileService from "./components/ProfileService"

function Profile() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:id" element={<ProfileService />} />
        <Route path="/profile" element={<ProfileService />} />
      </Routes>
    </Router>
  );
}

export default Profile