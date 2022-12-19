import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { getTokenFromUrl } from '../Spotify/Spotify';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

console.log("This is what we pulled from URL:", getTokenFromUrl());

var _spotifyToken = getTokenFromUrl().access_token
const clientId = process.env;
console.log(clientId);

function setToken() {
  if (_spotifyToken == null) {
    return
  }
  localStorage.setItem('token', _spotifyToken);
}

function getToken() {
  return localStorage.getItem('token');
}

function App() {
  setToken();
  const token = getToken();

  if (!token || token == null) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
