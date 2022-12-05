import React from "react"
import { Link } from "react-router-dom"

import emptyCartImg from "../assets/img/empty-cart.png"
import { BASE_URL } from "../utils/consts"

const CartEmpty = () => {
    return (
        <div>
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <span>😕</span>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCartImg} alt="Empty cart" />
                <Link to={BASE_URL} className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty
