import React, { useState } from 'react';
import './App.css';
import { Form, Button, Input, Label } from "react-dom";
import { BrowserRouter  , Routes, Route} from 'react-router-dom';
import { HomePage, LoginPage, CustomerSignupPage, MyAccountPage, CustomerProfilePage } from './pages';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<CustomerSignupPage/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
