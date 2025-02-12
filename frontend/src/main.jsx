//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<h1>Home</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

