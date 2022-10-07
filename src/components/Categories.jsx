import React from 'react'


const Categories = () => {

    const [activeIndex, setActiveIndex] = React.useState(1)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((catergory, index) => {
                    return <li
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={index}>{catergory}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories
