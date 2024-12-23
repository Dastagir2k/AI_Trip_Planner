import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip';
import { Toaster } from './components/ui/sonner';
import Headers from './components/custom/Header';
import Login from './components/custom/Login';
import Signup from './components/custom/Signup';
import View from './TripDetails/View';
import Profile from './components/custom/Profile';
import SharableProfile from './components/custom/SharableProfile';

const router = createBrowserRouter([
  { path: '/', element: <Headers /> },
  { path: '/create-trip', element: <CreateTrip /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/view', element: <View /> },
  { path: '/profile', element: <Profile /> },
  { path: '/profile/:email', element: <SharableProfile /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
