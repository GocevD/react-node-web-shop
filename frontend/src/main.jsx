//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/home/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
)

