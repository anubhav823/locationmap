import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NotFound from './NotFound'
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path='/' exact element={<Users/>} />
        <Route path='/:userId/places' exact element={<UserPlaces/>} />
        {/* <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
      </main>
    </Router>
  );
}

export default App;
