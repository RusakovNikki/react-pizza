import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import items from './assets/pizzas.json'

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="pizza-block-wrapper">
            {
              items.map(elem => {
                return <PizzaBlock
                  price={elem.price}
                  title={elem.title}
                  picture={elem.imageUrl}
                  key={elem.id}
                  types={elem.types}
                  sizes={elem.sizes} />
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
