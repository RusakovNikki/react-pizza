import "./App.css";
import React from 'react'

import Header from "./components/Header";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {

  const [inputText, setInputText] = React.useState('')

  return (
    <div className="wrapper">
      <Header inputText={inputText} setInputText={setInputText} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home inputText={inputText} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> {/* в самом конце */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
