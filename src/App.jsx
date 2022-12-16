import { Route, Routes } from "react-router-dom"
import React from "react"

import "./App.css"
import Header from "./components/Header.tsx"
import "./scss/app.scss"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart"
import { BASE_URL } from "./utils/consts"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path={BASE_URL} element={<Home />} />
                        <Route path={`${BASE_URL}/cart`} element={<Cart />} />
                        <Route path="*" element={<NotFound />} />{" "}
                        {/* в самом конце */}
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
