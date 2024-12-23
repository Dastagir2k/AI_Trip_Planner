import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTrip from './create-trip';
import { Toaster } from './components/ui/sonner';
import Headers from './components/custom/Header';
import Login from './components/custom/Login';
import Signup from './components/custom/Signup';
import View from './TripDetails/View';
import Profile from './components/custom/Profile';
import SharableProfile from './components/custom/SharableProfile';
import Hero from './components/custom/Hero';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:email" element={<SharableProfile />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
