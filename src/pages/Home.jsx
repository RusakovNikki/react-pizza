import React from "react"
import { useContext } from "react"

import { MyContext } from "../App"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Sort from "../components/Sort"

const Home = () => {
  const { inputText, countPages } = useContext(MyContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)

  const [sortByCategory, setSortByCategory] = React.useState(0)
  const [sortByType, setSortByType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
    order: "desc",
  })

  const searchTextParam = inputText ? `&search=${inputText}` : ""
  const URL = `https://6341842616ffb7e275d2fd20.mockapi.io/items?page=${countPages}&limit=4${
    sortByCategory > 0 ? `&category=${sortByCategory}` : ""
  }&sortBy=${sortByType.sortProperty}&order=${
    sortByType.order
  }${searchTextParam}`

  React.useEffect(() => {
    setLoading(true)

    fetch(URL)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .then((_) => setLoading(false))

    window.scrollTo(0, 0)
  }, [sortByCategory, sortByType, inputText, countPages])

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))
  console.log(items)
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
          setSortByCategory={(idx) => setSortByCategory(idx)}
        />
        <Sort
          sortByType={sortByType}
          setSortByType={(obj) => setSortByType(obj)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="pizza-block-wrapper">
        {isLoading ? skeletons : pizzaItems}
      </div>
    </>
  )
}

export default Home
