import "./App.css";
import React from 'react'

import Header from "./components/Header";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Pagination from "./components/Pagination";

function App() {

  const [inputText, setInputText] = React.useState('')
  const [countPages, setCountPages] = React.useState(1)

  return (
    <div className="wrapper">
      <Header inputText={inputText} setInputText={setInputText} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home inputText={inputText} countPages={countPages} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> {/* в самом конце */}
          </Routes>
        </div>
      </div>
      <Pagination onChangePages={page => setCountPages(page)} />
    </div>
  )
}

export default App;
