import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NotFound from './NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/user' element={<Users/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
