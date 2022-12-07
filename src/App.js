import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NotFound from './NotFound'
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path='/user' element={<Users/>} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
