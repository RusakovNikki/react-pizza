import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import React from 'react'

import "./App.css";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Pagination from "./components/Pagination";

export const MyContext = React.createContext('');

function App() {

  const [inputText, setInputText] = React.useState('')
  const { page: countPages } = useSelector((state) => state.filter)

  return (
    <div className="wrapper">
      <MyContext.Provider value={{ inputText, setInputText, countPages }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/react-pizza/" element={<Home />} />
              <Route path="/react-pizza/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} /> {/* в самом конце */}
            </Routes>
          </div>
        </div>
        <Pagination />
      </MyContext.Provider>
    </div>
  )
}

export default App;
