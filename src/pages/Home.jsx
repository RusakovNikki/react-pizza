import React from 'react'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)

    const [sortByCategory, setSortByCategory] = React.useState(0)
    const [sortByType, setSortByType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
        order: 'desc'
    })

    const URL = `https://6341842616ffb7e275d2fd20.mockapi.io/items?${sortByCategory > 0 ? `category=${sortByCategory}` : ''}&sortBy=${sortByType.sortProperty}&order=${sortByType.order}`

    React.useEffect(() => {
        setLoading(true)

        fetch(URL)
            .then(res => res.json())
            .then(json => setItems(json))
            .then(_ => setLoading(false))

        window.scrollTo(0, 0)
    }, [sortByCategory, sortByType])

    return (
        <>
            <div className="content__top">
                <Categories sortByCategory={sortByCategory} setSortByCategory={(idx) => setSortByCategory(idx)} />
                <Sort sortByType={sortByType} setSortByType={(obj) => setSortByType(obj)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="pizza-block-wrapper">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map(elem => {
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
        </>
    )
}

export default Home
