import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { authContext } from "./shared/context/auth-context";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path='/' exact element={<Users />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/places/new' exact element={<NewPlace />} />
        <Route path='/places/:placeId' exact element={<UpdatePlace />} />
        <Route path='/*' element={<Navigate replace to='/'/>} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/' exact element={<Users />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/auth' exact element={<Auth />} />
        <Route path='/*' element={<Navigate replace to='/auth'/>} />
      </Routes>

    );
  }
  return (
    <authContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>

      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </authContext.Provider>
  );
}

export default App;
