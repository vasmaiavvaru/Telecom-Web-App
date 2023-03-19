import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage, LoginPage, CustomerSignupPage, MyAccountPage, CustomerProfilePage } from './pages';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/customersignup" element={<CustomerSignupPage />}></Route>
          <Route path="/myaccount" element={<MyAccountPage />}></Route>
          <Route path="/customerprofile" element={<CustomerProfilePage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
