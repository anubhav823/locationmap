import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path='/' exact element={<Users/>} />
        <Route path='/:userId/places' exact element={<UserPlaces/>} />
        <Route path='/places/new' exact element={<NewPlace/>} />
        {/* <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
      </main>
    </Router>
  );
}

export default App;
