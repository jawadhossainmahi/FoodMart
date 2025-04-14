import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
