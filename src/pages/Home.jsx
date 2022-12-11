import React, { useEffect, useContext, useRef } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import qs from "qs"

import { MyContext } from "../App"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Sort, { list } from "../components/Sort"
import { setCategodyId, setParams } from "../redux/slices/filterSlice"
import Pagination from "../components/Pagination"
import { fetchPizzas } from "../redux/slices/pizzaSlice"

const Home = () => {
    const isParams = useRef(false)
    const isMounted = useRef(false)
    const navigate = useNavigate()
    const { inputText, countPages } = useContext(MyContext)
    const { items, status } = useSelector((state) => state.pizza)

    const { sort: sortByType, category: sortByCategory } = useSelector(
        (state) => state.filter
    )

    const dispatch = useDispatch()

    const searchTextParam = inputText ? `&search=${inputText}` : ""
    const URL = `https://-6341842616ffb7e275d2fd20.mockapi.io/items?page=${countPages}&limit=4${
        sortByCategory > 0 ? `&category=${sortByCategory}` : ""
    }&sortBy=${sortByType.sortProperty}&order=${
        sortByType.order
    }${searchTextParam}`

    useEffect(() => {
        // При первом заходе на сайт, используется для сохранения параметров фильтрации
        const params = qs.parse(window.location.search.substring(1))

        const sort = list.find((obj) => {
            return obj.sortProperty === params.sortByType
        })
        if (window.location.search && sort) {
            dispatch(setParams({ ...params, sort }))

            isParams.current = true
        }
    }, [])

    async function fetchData() {
        dispatch(fetchPizzas(URL))
    }
    useEffect(() => {
        window.scrollTo(0, 0)

        if (!isParams.current) {
            fetchData()
        }

        isParams.current = false
    }, [sortByCategory, sortByType, inputText, countPages])

    useEffect(() => {
        const queryString = qs.stringify({
            sortByCategory,
            sortByType: sortByType.sortProperty,
            countPages,
        })
        if (isMounted.current) navigate(`?${queryString}`)

        isMounted.current = true
    }, [sortByCategory, sortByType, countPages])

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index} />
    ))

    const pizzaItems = items
        .filter((item) => {
            if (item.title.toLowerCase().includes(inputText.toLowerCase())) {
                return true
            }
            return false
        })
        .map((elem) => <PizzaBlock key={elem.id} {...elem} />)

    return (
        <>
            <div className="content__top">
                <Categories
                    sortByCategory={sortByCategory}
                    setSortByCategory={(id) => dispatch(setCategodyId(id))}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="pizza-block-wrapper">
                {status === "error" && (
                    <div className="content__error-message">
                        <h2>
                            Приносим свои извинения <span>😕</span>
                        </h2>
                        <p>
                            Вероятней всего, произошла ошибка на сервере.
                            <br />
                            Попробуйте обновить страницу или зайти немного
                            позднее
                        </p>
                    </div>
                )}
                {status === "loading" ? skeletons : pizzaItems}
            </div>
            <Pagination />
        </>
    )
}

export default Home
